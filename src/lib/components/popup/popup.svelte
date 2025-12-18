<script lang="ts" module>
	export type PopupContext = {
		open: () => void;
		close: () => void;
		toggle: () => void;
		isOpen: () => boolean;
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	const { children } = $props();
	let isOpen = $state(false);

	function open() {
		isOpen = true;
	}

	function close() {
		isOpen = false;
	}

	function toggle() {
		isOpen = !isOpen;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') close();
	}

	setContext<PopupContext>('popup', {
		open,
		close,
		toggle,
		isOpen: () => isOpen
	});
</script>

<div onkeydown={handleKeydown} tabindex="0" role="dialog" class="relative">
	{@render children()}
</div>
