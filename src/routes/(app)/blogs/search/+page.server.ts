import '$lib/features/category/lib/Category.model';
import '$lib/features/user/lib/User.model';

import { Blog } from '$lib/features/blog/lib/Blog.model';
import { blogMapper } from '$lib/features/blog/lib/blog.mapper';

export const load = async ({ url }) => {
	const query = url.searchParams.get('q')?.toString() ?? '';

	const filter = query ? { title: new RegExp(query, 'i') } : {};

	const blogs = await Blog.find(filter).limit(8).populate('category').populate('author');

	const mappedBlogs = blogMapper(blogs);

	return {
		blogs: mappedBlogs,
		query
	};
};
