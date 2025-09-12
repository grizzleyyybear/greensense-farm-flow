import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoute from './routes/weather.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/weather', weatherRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});