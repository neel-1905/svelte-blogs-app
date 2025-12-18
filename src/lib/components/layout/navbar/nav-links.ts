export type TNavLink = {
	name: string;
	href: string;
};

export const navLinks: TNavLink[] = [
	{ name: 'Home', href: '/' },
	{ name: 'Blogs', href: '/blogs' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' }
];
