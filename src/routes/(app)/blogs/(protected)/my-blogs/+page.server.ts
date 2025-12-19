import { blogMapper } from '$lib/features/blog/lib/blog.mapper.js';
import { Blog } from '$lib/features/blog/lib/Blog.model.js';

export const load = async ({ locals }) => {
	const blogs = await Blog.find({ author: locals.user!.id })
		.populate('category')
		.populate('author');
	const mappedBlogs = blogMapper(blogs);

	return {
		blogs: mappedBlogs
	};
};
