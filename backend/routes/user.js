import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// // make sure uploads folder exists
// const uploadDir = path.join(process.cwd(), 'uploads');
// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// // configure multer to write to /uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     // unique file name
//     const uniqueName = Date.now() + '-' + file.originalname;
//     cb(null, uniqueName);
//   }
// });
// const upload = multer({ storage });

// GET /api/user?email=someone@example.com
router.get('/', async (req, res) => {
    const { email } = req.query;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    try {
        let user = await User.findOne({ email });
        if (!user) {
            // If user doesn't exist, create a new one
            user = await User.create({ email, plots: [] });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});

export default router;