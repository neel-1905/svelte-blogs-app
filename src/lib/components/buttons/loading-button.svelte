<script lang="ts">
	import { Loading } from '../feedback';
	import Button from './button.svelte';
	import type { ButtonProps } from './button.types';

	const {
		variant,
		size,
		className,
		disabled,
		children,
		loading = false
	}: ButtonProps & { loading?: boolean } = $props();
</script>

<Button {variant} {size} disabled={disabled || loading} {className}>
	{#if loading}
		<Loading />
	{:else}
		{@render children()}
	{/if}
</Button>
