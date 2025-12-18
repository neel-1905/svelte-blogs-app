<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/buttons';
	import { Card, CardHeader, CardTitle, CardDescription } from '$lib/components/card';
	import { Input } from '$lib/components/inputs';
	import { enhanceWithToast } from '$lib/utils/formEnhancer.utils.js';
	import { superForm } from 'sveltekit-superforms';

	const { data } = $props();
	// svelte-ignore state_referenced_locally
	const { form, errors } = superForm(data.form);
</script>

<div class="flex-center min-h-screen py-2">
	<Card>
		<CardHeader>
			<CardTitle>Register</CardTitle>
			<CardDescription>
				Create your account to start sharing your thoughts and stories with the world.
			</CardDescription>
		</CardHeader>
		<form method="POST" use:enhance={enhanceWithToast} class="space-y-3">
			<Input
				label="First Name"
				name="firstName"
				id="firstName"
				bind:value={$form.firstName}
				error={$errors.firstName?.[0]}
				aria-invalid={!!$errors.firstName}
			/>

			<Input
				label="Last Name"
				name="lastName"
				id="lastName"
				bind:value={$form.lastName}
				error={$errors.lastName?.[0]}
				aria-invalid={!!$errors.lastName}
			/>

			<Input
				label="Email"
				name="email"
				id="email"
				type="email"
				bind:value={$form.email}
				error={$errors.email?.[0]}
				aria-invalid={!!$errors.email}
			/>

			<div class="grid gap-4 md:grid-cols-2">
				<Input
					label="Password"
					name="password"
					id="password"
					type="password"
					bind:value={$form.password}
					error={$errors.password?.[0]}
					aria-invalid={!!$errors.password}
				/>

				<Input
					label="Confirm Password"
					name="confirmPassword"
					id="confirmPassword"
					type="password"
					bind:value={$form.confirmPassword}
					error={$errors.confirmPassword?.[0]}
					aria-invalid={!!$errors.confirmPassword}
				/>
			</div>
			<Button className="w-full">Register</Button>
		</form>
		<p class="text-center text-sm">
			Already have an account? <a href="/login" class="font-semibold hover:underline">Login</a>
		</p>
	</Card>
</div>
