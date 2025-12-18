<script lang="ts">
	import { DateBadge } from '$lib/components';
	import { ArrowUp } from '@lucide/svelte';

	type BlogCardProps = {
		id: string;
		title: string;
		category: string;
		date: string;
		image: string;
	};

	const { id, title, category, date, image }: BlogCardProps = $props();
</script>

<article class="blog-card">
	<div class="img-container">
		<img src={image} alt={title} loading="lazy" />

		<a href="/blogs/{id}">
			<div class="link">
				<ArrowUp class="rotate-45" />
			</div>
		</a>

		<div class="date">
			<DateBadge {date} />
		</div>
	</div>

	<div class="category">
		<span class="dot">•</span>
		<span class="text">{category}</span>
	</div>

	<a href="/blogs/{id}" class="hover:underline">
		<h1>{title}</h1>
	</a>
</article>
