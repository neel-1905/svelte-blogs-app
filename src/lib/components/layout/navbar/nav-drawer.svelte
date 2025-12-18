<script lang="ts">
	import { APP } from '$lib/app.config';
	import { NavLink } from '$lib/components/layout';
	import { navLinks } from './nav-links';
	import { XIcon } from '@lucide/svelte';

	const { isDrawerOpen, closeDrawer } = $props<{
		isDrawerOpen: boolean;
		closeDrawer: () => void;
	}>();
</script>

<div
	class="fixed top-0 right-0 z-50 h-full w-64 transform bg-nav-background shadow-lg transition-transform duration-300 ease-in-out md:hidden {isDrawerOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
>
	<div class="flex-between-center w-full p-5">
		<a href="/" class="text-xl font-bold text-nav-foreground italic hover:text-nav-foreground/85">
			{APP.name}
		</a>
		<button onclick={closeDrawer}>
			<XIcon />
		</button>
	</div>
	<div class="flex flex-col gap-8 px-6 py-3">
		{#each navLinks as link}
			<NavLink {link} {closeDrawer} />
		{/each}
	</div>
</div>
