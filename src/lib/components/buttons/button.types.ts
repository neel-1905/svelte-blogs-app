import type { Snippet } from 'svelte';

export type ButtonProps = {
	variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary';
	size?: 'sm' | 'md' | 'lg' | 'icon';
	className?: string;
	disabled?: boolean;
	children: Snippet;
};
