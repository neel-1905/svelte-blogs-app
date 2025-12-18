import type { Actions } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { zod4 } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/features/auth/lib/auth.validations';
import { fail } from '@sveltejs/kit';
import { User } from '$lib/features/user/lib/User.model';
import bcrypt from 'bcryptjs';
import { signJwt } from '$lib/utils/jwt.utils';

export const load = async (event) => {
	const form = await superValidate(zod4(loginSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request, cookies, url }) => {
		const formData = Object.fromEntries(await request.formData());
		const form = await superValidate(formData, zod4(loginSchema));

		if (!form.valid) {
			return fail(400, { form, message: 'Validation failed!' });
		}

		try {
			const { email, password } = form.data;

			const existingUser = await User.findOne({ email });

			if (!existingUser) {
				return fail(400, { form, message: 'User with this email does not exist!' });
			}

			const isPasswordValid = await bcrypt.compare(password, existingUser.password);

			if (!isPasswordValid) {
				return fail(400, { form, message: 'Invalid credentials!' });
			}

			const token = signJwt({ id: existingUser.id, email: existingUser.email });

			cookies.set('session', token, {
				httpOnly: true,
				path: '/',
				secure: true,
				sameSite: 'lax',
				maxAge: 60 * 60 * 24 * 7
			});

			const redirectTo = url.searchParams.get('redirectTo')?.slice(0) || '/';

			// return message(form, 'Login successful!', {
			// 	redirectTo
			// });
			return {
				type: 'success',
				status: 200,
				message: 'Login successful!',
				redirectTo,
				form
			};
		} catch (error) {
			console.log('Error:', error);
			return fail(500, { form, message: 'Something went wrong!' });
		}
	}
};
