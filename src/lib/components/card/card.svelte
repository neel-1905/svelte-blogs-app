<script lang="ts">
	import { cn } from '$lib/cn';
	import type { Snippet } from 'svelte';

	const { children, className }: { children: Snippet; className?: string } = $props();
</script>

<div class={cn('card', className)}>
	{@render children()}
</div>
