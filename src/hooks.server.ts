import { connectDB } from '$lib/db.config';
import { type Handle, type ServerInit } from '@sveltejs/kit';
import { verifyJwt } from '$lib/utils/jwt.utils';
import { User } from '$lib/features/user/lib/User.model';

export const init: ServerInit = async () => {
	await connectDB();
};

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	if (session) {
		const payload = verifyJwt(session);
		if (payload) {
			const user = await User.findById(payload.id);
			event.locals.user = {
				id: user._id.toString(),
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				profileImage: user.profileImage
			};
		}
	}
	return await resolve(event);
};
