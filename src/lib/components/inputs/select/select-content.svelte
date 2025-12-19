<script lang="ts">
	import { getContext } from 'svelte';
	import type { SelectContext } from './select.svelte';
	import { slide } from 'svelte/transition';
	import { clickOutside } from '$lib/hooks';

	const { children } = $props();

	const { state, close } = getContext<SelectContext>('select');
</script>

{#if state.isOpen}
	<div
		role="listbox"
		transition:slide
		class="absolute mt-1 w-full rounded-input border border-gray-400 bg-background shadow-xl"
		use:clickOutside={close}
	>
		<ul>
			{@render children()}
		</ul>
	</div>
{/if}
