import express from 'express';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';
import User from '../models/User.js';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

const router = express.Router();
const upload = multer(); // memory storage by default

cloudinary.config({
  cloud_name: process.env.CLD_CLOUD_NAME,
  api_key: process.env.CLD_API,
  api_secret: process.env.CLD_API_SECRET,
});

router.post('/user/add-plot', upload.single('leafImage'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    if (!req.body.email) {
      return res.status(400).json({ error: 'No email provided' });
    }

    // 1. Upload image to Cloudinary
    const uploadFromBuffer = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: 'image' },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        streamifier.createReadStream(buffer).pipe(stream);
      });
    };

    const cloudImageUrl = await uploadFromBuffer(req.file.buffer);

    // 2. Forward file to Flask model service for prediction
    const formData = new FormData();
    formData.append('file', req.file.buffer, req.file.originalname);

    const flaskRes = await axios.post('http://localhost:5001/predict', formData, {
      headers: formData.getHeaders(),
    });

    const { predicted_class, confidence, pestSuggest } = flaskRes.data;

    // 3. Save plot with Cloudinary image URL
    const newPlot = {
      plotId: Date.now().toString(),
      status: predicted_class,
      pestSuggest: pestSuggest,
      confidenceLevel: confidence ?? 0,
      imageUrl: cloudImageUrl,
    };

    await User.updateOne(
      { email: req.body.email },
      { $push: { plots: newPlot } }
    );

    const user = await User.findOne({ email: req.body.email });
    res.json({ plots: user.plots });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
