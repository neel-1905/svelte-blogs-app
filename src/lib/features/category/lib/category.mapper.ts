export const categoryMapper = (categories: any[]) => {
	return categories.map((category: any) => ({ id: category._id.toString(), name: category.name }));
};
