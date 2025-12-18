<script lang="ts">
	import { cn } from '$lib/cn';
	import type { Snippet } from 'svelte';

	const { className, children }: { className?: string; children: Snippet } = $props();
</script>

<section class={cn('py-10', className)}>
	{@render children()}
</section>
