<script lang="ts">
	import { Section, SectionHeading } from '$lib/components/layout';
	import { BlogCard } from '.';

	const { blogs } = $props();
</script>

<Section>
	<SectionHeading href="/blogs" linkLabel="See all blogs">Recent Blogs</SectionHeading>

	<div class="blogs-grid">
		{#each blogs as blog}
			<BlogCard {...blog} />
		{/each}
	</div>
</Section>
