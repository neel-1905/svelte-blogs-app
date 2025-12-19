<script lang="ts">
	import { Section } from '$lib/components/layout';
	import {
		Input,
		Select,
		SelectTrigger,
		Textarea,
		SelectContent,
		SelectOption,
		ImageInput
	} from '$lib/components/inputs';
	import { Button, LoadingButton } from '$lib/components/buttons';
	import { superForm } from 'sveltekit-superforms';
	import { onResult } from '$lib/utils/formEnhancer.utils.js';
	import { Sparkles } from '@lucide/svelte';

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
</script>

<Section>
	<div class="mx-auto max-w-4xl">
		<!-- Header -->
		<div class="mb-8 text-center">
			<div class="mb-3 flex items-center justify-center gap-2">
				<Sparkles size={28} class="text-purple-500" />
				<h1 class="text-3xl font-bold">Create Your Blog</h1>
			</div>
			<p>Share your thoughts and stories with the world</p>
		</div>

		<!-- Form -->
		<form method="POST" use:formEnhance class="space-y-6" enctype="multipart/form-data">
			<!-- Featured Image Upload -->
			<ImageInput name="image" label="Featured Image" error={$errors.image?.[0]} />

			<!-- Title -->
			<div>
				<Input
					label="Blog Title"
					id="title"
					name="title"
					type="text"
					placeholder="Enter an engaging title for your blog..."
					bind:value={$form.title}
					error={$errors.title?.[0]}
					aria-invalid={!!$errors.title}
				/>
			</div>

			<!-- Category -->
			<Select
				name="category"
				label="Category"
				bind:value={$form.category}
				error={$errors.category?.[0]}
				isCreatable
			>
				<SelectTrigger placeholder="Select a category" />
				<SelectContent>
					{#each data.categories as category (category.id)}
						<SelectOption value={category.id} label={category.name} />
					{/each}
				</SelectContent>
			</Select>

			<!-- Content -->
			<div>
				<Textarea
					label="Content"
					id="content"
					name="content"
					rows={12}
					placeholder="Write your blog content here... Share your story, insights, or experiences."
					bind:value={$form.content}
					error={$errors.content?.[0]}
					aria-invalid={!!$errors.content}
				/>
				<p class="mt-2 text-xs text-gray-500">
					Tip: Use clear paragraphs and engaging language to keep your readers interested.
				</p>
			</div>

			<!-- Action Buttons -->
			<div class="flex items-center justify-end gap-4 border-t border-gray-200 pt-6">
				<a href="/blogs">
					<Button variant="outline" type="button">Cancel</Button>
				</a>
				<LoadingButton loading={$submitting} size="lg">Publish Blog</LoadingButton>
			</div>
		</form>
	</div>
</Section>
