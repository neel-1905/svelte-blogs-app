<script lang="ts">
	import { cn } from '$lib/cn';
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class={cn('footer')}>
	{@render children()}
</div>
