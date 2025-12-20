<script lang="ts">
	import { BestOfTheWeek, NewBlogs } from '$lib/features/blog/ui';

	const { data } = $props();
</script>

<BestOfTheWeek />

<NewBlogs blogs={data.blogs} />
