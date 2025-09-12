import express from 'express';
import User from '../models/User.js';

const router = express.Router();

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

// Add a fake plot for a user (for now, no image upload)
router.post('/add-plot', async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    // Fake plot data
    const fakePlot = {
        plotId: Math.random().toString(36).substring(2, 8).toUpperCase(),
        status: 'healthy',
        healthScore: Math.floor(Math.random() * 21) + 80, // 80-100
        reason: 'No infection detected',
        imageUrl: '' // You can add a placeholder or leave empty
    };

    try {
        const user = await User.findOneAndUpdate(
            { email },
            { $push: { plots: fakePlot } },
            { new: true, upsert: true }
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});

export default router;