import z from 'zod';

export const registerSchema = z
	.object({
		firstName: z
			.string()
			.min(3, 'First name must be at least 3 characters')
			.max(20, 'First name must be at most 20 characters'),
		lastName: z
			.string()
			.min(3, 'Last name must be at least 3 characters')
			.max(20, 'Last name must be at most 20 characters')
			.optional(),
		email: z.email('Invalid email address'),
		password: z.string().min(8, 'Password must be at least 8 characters'),
		confirmPassword: z.string()
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'Passwords do not match',
				path: ['confirmPassword']
			});
		}
	});

export const loginSchema = z.object({
	email: z.email('Invalid email address'),
	password: z.string().min(1, 'Password is required')
});

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
