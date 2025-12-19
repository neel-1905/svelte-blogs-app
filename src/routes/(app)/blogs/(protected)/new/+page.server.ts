import type { Actions } from './$types.js';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { blogFormSchema } from '$lib/features/blog/lib/blog.validations.js';
import { Blog } from '$lib/features/blog/lib/Blog.model.js';
import { Category } from '$lib/features/category/lib/Category.model.js';
import { categoryMapper } from '$lib/features/category/lib/category.mapper.js';
import { authRedirect } from '$lib/utils/authHelper.utils.js';
import { uploadToImgBB } from '$lib/utils/uploadImage.utils.js';
import { isMongoId } from '$lib/utils/mongo.utils.js';

export const load = async ({ locals, url }) => {
	authRedirect({ locals, url });

	const categories = categoryMapper(await Category.find());

	const form = await superValidate(zod4(blogFormSchema));

	return { form, categories };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();

		const form = await superValidate(formData, zod4(blogFormSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const imageFile = formData.get('image');
		let categoryId = formData.get('category') as string;

		// If category is not a MongoDB ID, create a new category
		if (!isMongoId(categoryId)) {
			const newCategory = await Category.create({ name: categoryId });
			categoryId = newCategory._id.toString();
		}

		let imageUrl: string | undefined;

		if (imageFile instanceof File && imageFile.size > 0) {
			imageUrl = await uploadToImgBB(imageFile);
		}

		try {
			await Blog.create({
				...form.data,
				category: categoryId,
				image: imageUrl,
				author: locals.user!.id
			});

			return {
				type: 'success',
				status: 200,
				message: 'Blog created!',
				redirectTo: '/blogs'
			};
		} catch (error) {
			console.error(error);
			return fail(500, { form, message: 'Something went wrong' });
		}
	}
};
