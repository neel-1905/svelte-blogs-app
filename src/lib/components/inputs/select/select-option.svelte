<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { SelectContext } from './select.svelte';

	const { label, value } = $props();

	const { selectOption, state, registerOption } = getContext<SelectContext>('select');

	// Register this option when component mounts
	onMount(() => {
		registerOption({ label, value });
	});
</script>

<li
	role="option"
	tabindex="0"
	aria-selected={value === state.selectedOption.value}
	class="cursor-pointer rounded-primary p-2 text-xsm font-medium hover:bg-accent"
	onclick={() => selectOption({ label, value })}
	onkeydown={(e) => e.key === 'Enter' && selectOption({ label, value })}
>
	{label}
</li>
