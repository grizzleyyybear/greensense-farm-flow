import mongoose from 'mongoose';

const plotSchema = new mongoose.Schema({
    plotId: { type: String, required: true },
    status: { type: String, required: true },
    pestSuggest: {type: String, required: true},
    confidenceLevel: { type: Number, required: true },
    imageUrl: { type: String }
});

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    plots: { type: [plotSchema], default: [] }
});

const User = mongoose.model('User', userSchema);

export default User;