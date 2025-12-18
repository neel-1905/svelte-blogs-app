<script lang="ts">
	import { getContext } from 'svelte';
	import type { PopupContext } from './popup.svelte';

	const popup = getContext<PopupContext>('popup');
	const { children } = $props();
</script>

{#if popup.isOpen()}
	<!-- <div class="fixed inset-0 bg-black/40 z-40" onclick={popup.close}></div> -->

	<div
		class="absolute top-full right-0 z-50 flex items-center justify-center rounded-primary bg-popup shadow-card"
	>
		<div class="relative rounded-xl p-4 shadow-xl">
			{@render children()}
		</div>
	</div>
{/if}
