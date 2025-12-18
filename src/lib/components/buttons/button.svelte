<script lang="ts">
	import { cn } from '$lib/cn';
	import { buttonVariants } from './button';
	import type { ButtonProps } from './button.types';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const { variant, size, className, children, ...rest }: ButtonProps & HTMLButtonAttributes =
		$props();
</script>

<button class={cn(buttonVariants({ variant, size }), className)} {...rest}>
	{@render children()}
</button>
