export const convertDateToDDMMMMYYYY = (date: string) => {
	const newDate = new Date(date);
	return newDate.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
};
