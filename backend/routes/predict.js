import express from 'express';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';
import User from '../models/User.js';

const router = express.Router();
const upload = multer(); // memory storage by default

router.post('/user/add-plot', upload.single('leafImage'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    if (!req.body.email) {
      return res.status(400).json({ error: 'No email provided' });
    }

    // forward file to Flask model service
    const formData = new FormData();
    formData.append('file', req.file.buffer, req.file.originalname);

    const flaskRes = await axios.post('http://localhost:5001/predict', formData, {
      headers: formData.getHeaders(),
    });

    // ensure Flask returns confidence too
    const { predicted_class, confidence, pestSuggest } = flaskRes.data;

    // create a new plot object in MongoDB
    const newPlot = {
      plotId: Date.now().toString(),
      status: predicted_class,
      pestSuggest: pestSuggest,
      confidenceLevel: confidence ?? 0, // fallback
      imageUrl: '/uploads/' + req.file.originalname, // or your S3/cloud URL
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
