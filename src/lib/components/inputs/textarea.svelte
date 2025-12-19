<script lang="ts">
	import { cn } from '$lib/cn';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import InputError from './input-error.svelte';
	import InputLabel from './input-label.svelte';

	type TextareaProps = {
		className?: string;
		label?: string;
		error?: string;
		rows?: number;
	} & HTMLTextareaAttributes;

	const {
		className,
		id,
		label,
		error,
		rows = 5,
		value = $bindable(),
		...rest
	}: TextareaProps = $props();
</script>

<div>
	{#if label}
		<InputLabel {label} {id} />
	{/if}

	<textarea {id} {rows} class={cn('input resize-y', className)} {value} {...rest}></textarea>

	{#if error}
		<InputError {error} />
	{/if}
</div>
