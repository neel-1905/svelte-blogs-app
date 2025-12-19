import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types.js';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { blogFormSchema } from '$lib/features/blog/lib/blog.validations.js';
import { Blog } from '$lib/features/blog/lib/Blog.model.js';
import { Category } from '$lib/features/category/lib/Category.model.js';
import { categoryMapper } from '$lib/features/category/lib/category.mapper.js';
import { authRedirect } from '$lib/utils/authHelper.utils.js';

export const load = async ({ locals, url }) => {
	authRedirect({ locals, url });

	const categories = categoryMapper(await Category.find());

	const form = await superValidate(zod4(blogFormSchema));

	return { form, categories };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData());
		const form = await superValidate(formData, zod4(blogFormSchema));

		if (!form.valid) {
			return fail(400, { form, message: 'Validation failed!' });
		}

		try {
			await Blog.create({
				...form.data,
				author: locals.user!.id
			});

			return {
				type: 'success',
				status: 200,
				message: 'Blog created!',
				redirectTo: '/blogs',
				form
			};
		} catch (error) {
			return fail(500, { form, message: 'Something went wrong!' });
		}
	}
};
