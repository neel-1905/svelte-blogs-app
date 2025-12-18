<script lang="ts">
	const { date }: { date: string } = $props();
</script>

<div class="w-max rounded-full bg-background px-3 py-2 text-xs font-semibold text-foreground">
	{date}
</div>
