<script lang="ts">
	import { Navbar } from '$lib/components/layout';

	const { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
		{@render children()}
	</main>
</div>
