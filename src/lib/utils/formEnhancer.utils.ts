// // $lib/utils/formEnhancer.ts
import { goto, invalidateAll } from '$app/navigation';
import { showToast } from '$lib/utils/showToast.utils';
import type { ActionResult, SubmitFunction } from '@sveltejs/kit';

export const enhanceWithToast: SubmitFunction = () => {
	return async ({ result, update }) => {
		if (result.type === 'success') {
			console.log('form result', result);
			showToast.success(result.data?.message || 'Success!');
			await update();
			if (result.data?.redirectTo) {
				goto(result.data.redirectTo);
			}
		} else if (result.type === 'failure') {
			showToast.error(result.data?.message || 'Something went wrong');
			await update();
			return;
		} else if (result.type === 'error') {
			showToast.error('An unexpected error occurred');
			await update();
			return;
		}
	};
};

export async function onResult({ result }: { result: ActionResult }) {
	if (result.type === 'success') {
		console.log('form result', result?.data?.redirectTo);
		showToast.success(result.data?.message || 'Success!');
		if (result.data?.redirectTo) {
			await invalidateAll();
			return goto(result.data.redirectTo);
		}
	} else if (result.type === 'failure') {
		showToast.error(result.data?.message || 'Something went wrong');
		return;
	} else if (result.type === 'error') {
		showToast.error('An unexpected error occurred');
		return;
	}
}
