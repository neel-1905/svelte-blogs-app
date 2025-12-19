import pkg from 'mongoose';
const { Schema, models, model } = pkg;

const CategorySchema = new Schema(
	{
		name: { type: String, required: true, unique: true }
	},
	{ timestamps: true }
);

export const Category = models.Category || model('Category', CategorySchema);
