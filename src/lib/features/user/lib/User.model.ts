import pkg from 'mongoose';
const { Schema, models, model } = pkg;

const UserSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: false },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		profileImage: { type: String, default: '' }
	},
	{ timestamps: true }
);

export const User = models.User || model('User', UserSchema);
