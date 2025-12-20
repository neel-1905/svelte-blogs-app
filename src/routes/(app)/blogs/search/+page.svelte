<script lang="ts">
	import { Section } from '$lib/components/layout';
	import { Search } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { BlogCard } from '$lib/features/blog/ui';

	const { data } = $props();

	let query = $derived(data.query ?? '');

	let timeout: ReturnType<typeof setTimeout>;

	function updateSearch() {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			const url = new URL(page.url);

			if (query.trim()) {
				url.searchParams.set('q', query);
			} else {
				url.searchParams.delete('q');
			}

			goto(url, {
				replaceState: true,
				keepFocus: true,
				noScroll: true
			});
		}, 500);
	}
</script>

<Section>
	<div class="mb-6">
		<h1 class="mb-2 text-2xl font-bold">Search Blogs</h1>
		<p class="text-sm text-gray-600">
			{query
				? `Found ${data.blogs.length} result${data.blogs.length === 1 ? '' : 's'} for "${query}"`
				: `Showing all blogs (${data.blogs.length} total)`}
		</p>
	</div>

	<div class="flex w-full items-center gap-3 rounded-primary border p-3">
		<Search size={20} />
		<input
			type="text"
			class="w-full border-none text-sm font-medium outline-none"
			placeholder="Start typing to search blogs"
			bind:value={query}
			oninput={updateSearch}
		/>
	</div>

	<div class="mt-10">
		{#if data.blogs.length > 0}
			<div class="blogs-grid">
				{#each data.blogs as blog (blog.id)}
					<BlogCard {...blog} />
				{/each}
			</div>
		{:else}
			<div class="flex flex-col items-center justify-center py-16 text-center">
				<Search size={48} class="mb-4 text-gray-300" />
				<h3 class="mb-2 text-lg font-semibold text-gray-700">
					{query ? 'No blogs found' : 'Start searching'}
				</h3>
				<p class="text-sm text-gray-500">
					{query
						? `No results found for "${query}". Try a different search term.`
						: 'Type in the search box above to find blogs'}
				</p>
			</div>
		{/if}
	</div>
</Section>
