<script>
	import { IMAGES } from '$lib/assets';
	import { DateBadge } from '$lib/components';
</script>

<div
	class="aspect-video min-h-80 w-full flex-1 space-y-3 rounded-primary bg-cover bg-center bg-no-repeat object-cover p-5 shadow-lg md:w-3/4"
	style="background-image: url({IMAGES.bestOfTheWeek})"
>
	<DateBadge date="Sept 06. 2020" />

	<div
		class="w-max rounded-full bg-foreground px-3 py-2 text-xs font-medium text-foreground-secondary"
	>
		Travel
	</div>
</div>
