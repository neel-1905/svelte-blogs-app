<script lang="ts">
	import { getContext } from 'svelte';
	import type { PopupContext } from './popup.svelte';

	const { toggle } = getContext<PopupContext>('popup');
	const { children } = $props();
</script>

<div role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && toggle()} onclick={toggle}>
	{@render children()}
</div>
