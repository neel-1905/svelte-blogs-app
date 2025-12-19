<script lang="ts">
	import { getContext } from 'svelte';
	import type { SelectContext } from './select.svelte';
	import { ChevronDown } from '@lucide/svelte';
	import { InputError } from '..';

	const { placeholder = 'Select an option' }: { placeholder?: string } = $props();

	const { toggle, state, setInputValue, open, close, error, createNewOption, canCreateNew } =
		getContext<SelectContext>('select');

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		setInputValue(target.value);
	}

	function handleFocus() {
		open();
	}

	function handleKeydown(e: KeyboardEvent) {
		// Handle Enter key
		if (e.key === 'Enter') {
			e.preventDefault();

			// If creatable and can create new, create it
			if (state.isCreatable && canCreateNew()) {
				createNewOption();
			}
		}
		// Close on Escape
		if (e.key === 'Escape') {
			close();
		}
	}
</script>

<div class="relative w-full">
	<input
		type="text"
		class={['input w-full pr-8']}
		{placeholder}
		value={state.inputValue}
		oninput={handleInput}
		onfocus={handleFocus}
		onkeydown={handleKeydown}
		autocomplete="off"
		aria-invalid={!!error}
	/>
	<!-- {#if error}
		<InputError {error} />
	{/if} -->

	<button
		type="button"
		onclick={toggle}
		class="absolute top-1/2 right-2 -translate-y-1/2 transform"
		tabindex="-1"
	>
		<ChevronDown
			class={['size-5 text-gray-400 transition-all duration-200', state.isOpen ? 'rotate-180' : '']}
		/>
	</button>
</div>
