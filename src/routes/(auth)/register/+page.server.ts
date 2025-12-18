import { registerSchema } from '$lib/features/auth/lib/auth.validations';
import { User } from '$lib/features/user/lib/User.model.js';
import { fail, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
	const form = await superValidate(zod4(registerSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const form = await superValidate(formData, zod4(registerSchema));

		if (!form.valid) {
			return fail(400, { form, message: 'Validation failed!' });
		}

		try {
			const { email, password } = form.data;

			const existingUser = await User.findOne({ email });

			if (existingUser) {
				return fail(400, { form, message: 'User already exists!' });
			}

			const hashPassword = await bcrypt.hash(password, 10);

			await User.create({
				...form.data,
				password: hashPassword
			});

			return {
				type: 'success',
				status: 200,
				message: 'Registration successful!',
				redirectTo: '/'
			};
		} catch (error) {
			return fail(500, { form, message: 'Something went wrong!' });
		}
	}
};
