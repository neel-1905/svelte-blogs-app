<script lang="ts">
	import { cn } from '$lib/cn';
	import type { Snippet } from 'svelte';
	import { MoveRight } from '@lucide/svelte';

	const {
		children,
		className,
		href,
		linkLabel = 'View all'
	}: {
		children: Snippet;
		className?: string;
		href?: string;
		linkLabel?: string;
	} = $props();
</script>

<h1 class={cn('mb-8 text-4xl font-medium italic xl:text-5xl', className)}>
	{@render children()}
	{#if href && linkLabel}
		<a class="inline-flex w-max gap-1 text-xs hover:underline" {href}
			><span>{linkLabel}</span> <MoveRight size={16} />
		</a>
	{/if}
</h1>
