<script lang="ts">
	import { cn } from '$lib/cn';
	import type { Snippet } from 'svelte';

	const { children, className }: { children: Snippet; className?: string } = $props();
</script>

<h1 class={cn(className)}>{@render children()}</h1>
