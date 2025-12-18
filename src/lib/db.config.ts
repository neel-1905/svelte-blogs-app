import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

export async function connectDB() {
	try {
		await mongoose.connect(MONGO_URI);
		console.log('MongoDB connected');
	} catch (err) {
		console.error('Database connection error:', err);
	}
}
