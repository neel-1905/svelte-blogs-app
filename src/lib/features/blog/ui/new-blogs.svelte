<script>
	import { IMAGES } from '$lib/assets';
	import { Section, SectionHeading } from '$lib/components/layout';
	import { BlogCard } from '.';

	const blogs = [
		{
			id: '1',
			title: 'How to get the perfect shot',
			category: 'Travel',
			date: 'Sept 06. 2020',
			image: IMAGES.homeDecor
		},
		{
			id: '2',
			title: 'How to get the perfect shot',
			category: 'Travel',
			date: 'Sept 06. 2020',
			image: IMAGES.homeDecor
		},
		{
			id: '3',
			title: 'How to get the perfect shot',
			category: 'Travel',
			date: 'Sept 06. 2020',
			image: IMAGES.homeDecor
		},
		{
			id: '4',
			title: 'How to get the perfect shot',
			category: 'Travel',
			date: 'Sept 06. 2020',
			image: IMAGES.homeDecor
		}
	];
</script>

<Section>
	<SectionHeading href="/blogs" linkLabel="See all blogs">Recent Blogs</SectionHeading>

	<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		{#each blogs as blog}
			<BlogCard {...blog} />
		{/each}
	</div>
</Section>
