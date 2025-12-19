<script lang="ts">
	import { getContext } from 'svelte';
	import type { SelectContext } from './select.svelte';
	import { slide } from 'svelte/transition';
	import { clickOutside } from '$lib/hooks';
	import { Plus } from '@lucide/svelte';

	const { children } = $props();

	const { state, close, createNewOption, canCreateNew } = getContext<SelectContext>('select');
</script>

{#if state.isOpen}
	<div
		role="listbox"
		transition:slide
		class="absolute z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-input border border-gray-400 bg-background shadow-xl"
		use:clickOutside={close}
	>
		<ul>
			{@render children()}

			<!-- Create new option button -->
			{#if state.isCreatable && canCreateNew()}
				<li
					role="option"
					aria-selected="false"
					tabindex="0"
					class="flex cursor-pointer items-center gap-2 border-t border-gray-200 p-2 text-xsm font-medium text-purple-600 hover:bg-purple-50"
					onclick={createNewOption}
					onkeydown={(e) => e.key === 'Enter' && createNewOption()}
				>
					<Plus size={16} />
					<span>Create "<span class="font-semibold">{state.inputValue}</span>"</span>
				</li>
			{/if}
		</ul>
	</div>
{/if}
