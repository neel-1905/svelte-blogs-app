<script lang="ts">
	import { LoadingButton } from '$lib/components/buttons';
	import { Card, CardHeader, CardTitle, CardDescription } from '$lib/components/card';
	import { Input } from '$lib/components/inputs';
	import { onResult } from '$lib/utils/formEnhancer.utils.js';
	import { superForm } from 'sveltekit-superforms';

	const { data } = $props();
	// svelte-ignore state_referenced_locally
	const {
		form,
		errors,
		submitting,
		enhance: formEnhance
	} = superForm(data.form, {
		onResult
	});
	// const isSubmitting = $derived($submitting);
</script>

<div class="flex-center min-h-screen py-2">
	<Card>
		<CardHeader>
			<CardTitle>Login</CardTitle>
			<CardDescription>
				Login to your account to start sharing your thoughts and stories with the world.
			</CardDescription>
		</CardHeader>
		<form method="POST" use:formEnhance class="space-y-3">
			<Input
				label="Email"
				name="email"
				id="email"
				type="email"
				bind:value={$form.email}
				error={$errors.email?.[0]}
				aria-invalid={!!$errors.email}
			/>

			<Input
				label="Password"
				name="password"
				id="password"
				type="password"
				bind:value={$form.password}
				error={$errors.password?.[0]}
				aria-invalid={!!$errors.password}
			/>

			<LoadingButton loading={$submitting} className="w-full">Login</LoadingButton>
		</form>
		<p class="text-center text-sm">
			Don't have an account? <a href="/register" class="font-semibold hover:underline">Register</a>
		</p>
	</Card>
</div>
