<script lang="ts">
	import { APP } from '$lib/app.config';
	import { NavLink, navLinks, UserMenu } from '$lib/components/layout';
	import { onMount } from 'svelte';
	import { Search, Menu } from '@lucide/svelte';
	import NavDrawer from './nav-drawer.svelte';
	import { Button } from '$lib/components/buttons';
	import { page } from '$app/state';

	let isDrawerOpen = $state(false);
	let isMobile = $state(false);

	const {
		data: { user }
	} = page;
	const isAuthenticated = $derived(Boolean(user));

	onMount(() => {
		// Check if mobile on mount
		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	function checkMobile() {
		isMobile = window.innerWidth < 768;
		if (!isMobile) {
			isDrawerOpen = false;
		}
	}

	function toggleDrawer() {
		isDrawerOpen = !isDrawerOpen;
	}

	function closeDrawer() {
		isDrawerOpen = false;
	}
</script>

<!-- Navbar -->
<header>
	<nav class="bg-nav-background">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-20 items-center justify-between">
				<!-- Left side: Logo and Links -->
				<div class="flex items-center gap-8">
					<!-- Logo -->
					<a
						href="/"
						class="text-2xl font-bold text-nav-foreground italic hover:text-nav-foreground/85 xl:text-3xl"
					>
						{APP.name}
					</a>

					<!-- Desktop Navigation Links -->
					<div class="hidden md:flex md:gap-6">
						{#each navLinks as link}
							<NavLink {link} />
						{/each}
					</div>
				</div>

				<!-- Right side: Search and Profile -->
				<div class="flex items-center gap-4">
					<a
						href="/search"
						class="rounded-full p-2 transition-colors hover:bg-accent"
						aria-label="Search"
					>
						<Search size={20} />
					</a>

					{#if isAuthenticated}
						<UserMenu />
					{:else}
						<a href="/login">
							<Button>Login</Button>
						</a>
					{/if}

					<!-- Mobile Menu Button -->
					<button
						class="rounded-full p-2 transition-colors hover:bg-gray-100 md:hidden"
						onclick={toggleDrawer}
						aria-label="Toggle menu"
					>
						<Menu size={20} />
					</button>
				</div>
			</div>
		</div>
	</nav>
</header>

<!-- Mobile Drawer Overlay -->
{#if isDrawerOpen && isMobile}
	<div
		class="fixed inset-0 z-40 bg-black/50 transition-opacity"
		onclick={closeDrawer}
		onkeydown={(e) => e.key === 'Escape' && closeDrawer()}
		role="button"
		tabindex="0"
		aria-label="Close menu"
	></div>
{/if}

<NavDrawer {closeDrawer} {isDrawerOpen} />
