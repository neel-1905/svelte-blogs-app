import '$lib/features/category/lib/Category.model';
import '$lib/features/user/lib/User.model';

import { blogMapper } from '$lib/features/blog/lib/blog.mapper';
import { Blog } from '$lib/features/blog/lib/Blog.model';

export const load = async () => {
	const blogs = await Blog.find().populate('category').populate('author');
	const mappedBlogs = blogMapper(blogs);

	return {
		blogs: mappedBlogs
	};
};
