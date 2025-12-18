<script lang="ts">
	import type { TNavLink } from './nav-links';
	import { page } from '$app/state';

	const { link, closeDrawer } = $props<{
		link: TNavLink;
		closeDrawer?: () => void;
	}>();

	const isActive = $derived(page.url.pathname === link.href);
</script>

<div>
	<a
		href={link.href}
		class="text-sm font-medium text-nav-foreground transition-colors hover:text-nav-foreground/70 {isActive
			? 'text-nav-foreground/70'
			: ''}"
		onclick={closeDrawer}
	>
		{link.name}
	</a>
</div>
