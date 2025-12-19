<script lang="ts">
	import { cn } from '$lib/cn';
	import { getImagePreview } from '$lib/utils/imageHelpers.utils';
	import { ImagePlus, X, Upload } from '@lucide/svelte';
	import { InputError, InputLabel } from '.';

	type ImageInputProps = {
		label?: string;
		error?: string;
		id?: string;
		name?: string;
		className?: string;
		accept?: string;
		previewUrl?: string; // Optional: for displaying existing images
	};

	let {
		label = '',
		error = '',
		id = '',
		name = '',
		className = '',
		accept = 'image/*',
		previewUrl: externalPreviewUrl = ''
	}: ImageInputProps = $props();

	let fileInput: HTMLInputElement;
	let previewUrl = $state<string>('');
	let isDragging = $state(false);

	// Watch for external preview URL changes (e.g., existing image URL)
	$effect(() => {
		if (externalPreviewUrl && !previewUrl) {
			previewUrl = externalPreviewUrl;
		}
	});

	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0];

		if (file) {
			processFile(file);
		}
	}

	function processFile(file: File) {
		previewUrl = getImagePreview(file);
	}

	function removeImage() {
		previewUrl = '';
		if (fileInput) {
			fileInput.value = '';
		}
	}

	function triggerFileInput() {
		fileInput?.click();
	}

	// Drag and drop handlers
	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		isDragging = true;
	}

	function handleDragLeave(e: DragEvent) {
		e.preventDefault();
		isDragging = false;
	}

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		isDragging = false;

		const file = e.dataTransfer?.files?.[0];
		if (file && file.type.startsWith('image/')) {
			processFile(file);
		}
	}
</script>

<div class={cn('space-y-2', className)}>
	{#if label}
		<InputLabel {label} {id} />
	{/if}

	<!-- Hidden file input -->
	<input
		bind:this={fileInput}
		type="file"
		{id}
		{name}
		{accept}
		onchange={handleFileChange}
		class="hidden"
		aria-invalid={!!error}
	/>

	{#if previewUrl}
		<!-- Preview -->
		<div class="group relative overflow-hidden rounded-input border border-gray-200 shadow-sm">
			<img src={previewUrl} alt="Preview" class="h-64 w-full object-cover" />

			<!-- Overlay on hover -->
			<div
				class="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
			></div>

			<!-- Remove button -->
			<button
				type="button"
				onclick={removeImage}
				class="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-red-600"
			>
				<X size={18} />
			</button>

			<!-- Change image button -->
			<button
				type="button"
				onclick={triggerFileInput}
				class="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded-primary bg-white px-5 py-2.5 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:bg-gray-50"
			>
				<div class="flex items-center gap-2">
					<Upload size={16} />
					<span>Change Image</span>
				</div>
			</button>
		</div>
	{:else}
		<!-- Upload area with drag and drop -->
		<div
			role="button"
			tabindex="0"
			onclick={triggerFileInput}
			ondragover={handleDragOver}
			ondragleave={handleDragLeave}
			ondrop={handleDrop}
			onkeydown={(e) => e.key === 'Enter' && triggerFileInput()}
			class={cn(
				'flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-input border-2 border-dashed px-6 py-12 transition-all',
				isDragging
					? 'scale-[1.02] border-purple-500 bg-purple-100'
					: 'border-gray-300 bg-gray-50 hover:border-purple-400 hover:bg-purple-50',
				error && !isDragging && 'border-red-500 bg-red-50'
			)}
		>
			<div
				class={cn(
					'flex size-16 items-center justify-center rounded-full transition-all',
					isDragging ? 'scale-110 bg-purple-200' : 'bg-purple-100',
					error && !isDragging && 'bg-red-100'
				)}
			>
				<ImagePlus
					size={32}
					class={cn(
						'transition-all',
						isDragging ? 'text-purple-600' : 'text-purple-500',
						error && !isDragging && 'text-red-500'
					)}
				/>
			</div>

			<div class="text-center">
				<p class="text-sm font-medium text-gray-700">
					{isDragging ? 'Drop image here' : 'Click to upload or drag and drop'}
				</p>
				<p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
			</div>
		</div>
	{/if}

	{#if error}
		<InputError {error} />
	{/if}
</div>
