import '$lib/features/category/lib/Category.model';
import '$lib/features/user/lib/User.model';

import { blogMapper } from '$lib/features/blog/lib/blog.mapper.js';
import { Blog } from '$lib/features/blog/lib/Blog.model';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
	if (!locals.user) {
		// const formUrl = url.pathname + url.search;
		// throw redirect(302, `/login?redirectTo=${formUrl}`);
		// throw redirect(302, '/login');
	}

	const blogs = await Blog.find()
		.limit(4)
		.sort({ createdAt: -1 })
		.populate('category')
		.populate('author');
	const mappedBlogs = blogMapper(blogs);

	return {
		blogs: mappedBlogs
	};
};
