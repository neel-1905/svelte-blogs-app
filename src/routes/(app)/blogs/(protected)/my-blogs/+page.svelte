<script>
	import { Section, SectionHeading } from '$lib/components/layout';
	import { BlogCard } from '$lib/features/blog/ui';

	const { data } = $props();
</script>

<Section>
	<SectionHeading>My Blogs</SectionHeading>

	<div class="blogs-grid">
		{#each data.blogs as blog (blog.id)}
			<BlogCard {...blog} />
		{/each}
	</div>
</Section>
