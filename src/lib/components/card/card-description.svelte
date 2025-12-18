<script lang="ts">
	import { cn } from '$lib/cn';
	import type { Snippet } from 'svelte';

	const { children, className }: { children: Snippet; className?: string } = $props();
</script>

<p class={cn(className)}>
	{@render children()}
</p>
