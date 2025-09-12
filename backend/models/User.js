import mongoose from 'mongoose';

const plotSchema = new mongoose.Schema({
    plotId: { type: String, required: true },
    status: { type: String, required: true },
    healthScore: { type: Number, required: true },
    reason: { type: String },
    imageUrl: { type: String }
});

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    plots: { type: [plotSchema], default: [] }
});

const User = mongoose.model('User', userSchema);

export default User;