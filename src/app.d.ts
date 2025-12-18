// src/app.d.ts
// Ensure this file is included in tsconfig.json
declare global {
	namespace App {
		interface Locals {
			user: {
				id: string;
				email: string;
				firstName: string;
				lastName: string;
				profileImage: string;
			} | null;
		}

		interface PageData {
			user: {
				id: string;
				email: string;
				firstName: string;
				lastName: string;
				profileImage: string;
			} | null;
		}
	}
}

export {};
