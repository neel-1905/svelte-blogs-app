// lib/utils/toast.ts
import { toast } from 'svelte-sonner';

export const showToast = {
	error: (message: string, description?: string) => {
		toast.error(message, {
			description,
			duration: 5000
		});
	},

	success: (message: string, description?: string) => {
		toast.success(message, {
			description,
			duration: 3000
		});
	},

	info: (message: string, description?: string) => {
		toast.info(message, {
			description,
			duration: 3000
		});
	},

	warning: (message: string, description?: string) => {
		toast.warning(message, {
			description,
			duration: 4000
		});
	}
};
