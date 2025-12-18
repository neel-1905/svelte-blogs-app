<script lang="ts">
	import { cn } from '$lib/cn';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { InputError, InputLabel } from '.';
	type InputProps = {
		className?: string;
		label?: string;
		error?: string;
	} & HTMLInputAttributes;

	const {
		className,
		id,
		label,
		type = 'text',
		error,
		value = $bindable(),
		...rest
	}: InputProps = $props();
</script>

<div>
	{#if label}
		<InputLabel {label} {id} />
	{/if}

	<input {type} {id} class={cn('input', className)} {value} {...rest} />

	{#if error}
		<InputError {error} />
	{/if}
</div>
