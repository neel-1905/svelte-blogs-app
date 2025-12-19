<script lang="ts">
	import { Section } from '$lib/components/layout';
	import { BlogCard } from '$lib/features/blog/ui';

	const { data } = $props();
</script>

<Section>
	<div class="grid grid-cols-4 gap-10">
		{#each data.blogs as blog (blog.id)}
			<BlogCard {...blog} />
		{/each}
	</div>
</Section>
