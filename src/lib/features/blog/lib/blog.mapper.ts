import { convertDateToDDMMMMYYYY } from '$lib/utils/date.utils';

export const blogMapper = (blogs: any[]) => {
	return blogs.map((blog: any) => ({
		id: blog._id.toString(),
		title: blog.title,
		category: blog.category.name,
		date: convertDateToDDMMMMYYYY(blog.createdAt),
		image: blog.image,
		author: blog.author.firstName + ' ' + blog.author.lastName
	}));
};
