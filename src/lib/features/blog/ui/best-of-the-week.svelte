<script lang="ts">
	import { IMAGES } from '$lib/assets';
	import { Button } from '$lib/components/buttons';
	import { Section, SectionHeading } from '$lib/components/layout';
	import { BestCard } from '.';
	import { MoveRight, Plus } from '@lucide/svelte';
</script>

<Section>
	<SectionHeading href="/blogs" linkLabel="See all blogs">Best of the week</SectionHeading>

	<div class="flex flex-col gap-10 md:flex-row">
		<BestCard />

		<div class="hidden w-full flex-col rounded-primary shadow-lg md:w-1/4 lg:flex">
			<div class="relative h-2/3 overflow-hidden rounded-t-primary">
				<img src={IMAGES.writing} alt="person" class="h-full w-full object-cover" />

				<Button
					className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 transform"
					variant={`default`}
					size="lg">Write Without Limits</Button
				>
			</div>

			<div class="flex flex-col gap-4 rounded-b-primary bg-[#b7d4d8] p-6">
				<div class="flex items-center justify-between">
					<h3 class="text-lg font-semibold text-gray-900">Your Blogs</h3>
				</div>

				<p class="text-sm">
					You've published <span class="font-bold">12</span> amazing articles. Keep sharing your thoughts!
				</p>

				<a href="/my-blogs" class="group text-primary flex items-center gap-2 text-sm font-medium">
					View all your blogs
					<MoveRight size={16} class="transition-transform group-hover:translate-x-1" />
				</a>
			</div>
		</div>
	</div>
</Section>
