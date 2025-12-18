import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, url }) => {
	if (!locals.user) {
		// const formUrl = url.pathname + url.search;
		// throw redirect(302, `/login?redirectTo=${formUrl}`);
		// throw redirect(302, '/login');
	}
};
