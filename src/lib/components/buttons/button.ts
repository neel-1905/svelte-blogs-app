import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
	'inline-flex items-center justify-center font-medium transition-all rounded-full disabled:opacity-70 w-max',
	{
		variants: {
			variant: {
				default:
					'bg-btn-default-background text-btn-default-foreground hover:bg-btn-default-background/85',
				outline:
					'border border-btn-outline-border bg-btn-outline-background text-btn-outline-foreground hover:bg-accent',
				ghost: 'bg-transparent text-foreground hover:bg-accent',
				destructive: 'bg-destructive text-white hover:bg-red-600',
				secondary: 'bg-background text-foreground hover:bg-accent'
			},
			size: {
				sm: 'h-8 px-3 text-xs',
				md: 'h-10 px-4 text-sm',
				lg: 'h-12 px-6 text-base',
				icon: 'size-8 p-2'
			}
		},

		defaultVariants: {
			variant: 'default',
			size: 'md'
		}
	}
);
