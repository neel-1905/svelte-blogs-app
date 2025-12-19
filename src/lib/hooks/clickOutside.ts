export function clickOutside(node: HTMLElement, callback: () => void) {
	const handleClick = (event: PointerEvent) => {
		if (node && !node.contains(event.target as Node)) {
			callback();
		}
	};

	document.addEventListener('pointerdown', handleClick);

	return {
		destroy() {
			document.removeEventListener('pointerdown', handleClick);
		}
	};
}
