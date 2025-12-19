import pkg from 'mongoose';
const { Schema, models, model } = pkg;

const BlogSchema = new Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
		author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		image: { type: String, required: false },
		likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
	},
	{ timestamps: true }
);

export const Blog = models.Blog || model('Blog', BlogSchema);
