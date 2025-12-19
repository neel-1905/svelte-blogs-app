import { redirect } from '@sveltejs/kit';

export const authRedirect = ({ locals, url }: { locals: App.Locals; url: URL }) => {
	if (!locals.user) {
		const formUrl = encodeURIComponent(url.pathname + url.search);
		throw redirect(302, `/login?redirectTo=${formUrl}`);
	}
};
