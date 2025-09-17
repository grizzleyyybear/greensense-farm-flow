import express from 'express';
import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
        return res.status(400).json({ error: 'Missing lat or lon' });
    }

    try {
        console.log('Weather API Key:', process.env.WEATHER_API);
        const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${lat},${lon}`;
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        res.json({
            temperature: data.current.temp_c,
            humidity: data.current.humidity,
            windSpeed: data.current.wind_kph,
            uvIndex: data.current.uv,
        });
    } catch (error) {
        console.error('Weather API error:', error.response?.data || error.message, error.stack);
        res.status(500).json({ error: 'Failed to fetch weather data', details: error.response?.data || error.message });
    }
});

export default router;