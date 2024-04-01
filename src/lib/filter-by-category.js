export const filterByCategory = (list = [], category) => {
	if (!list) list = [];

	return list.filter((item) => {
		console.log(item.category.toLowerCase() === category, "check");
		if (category) {
			return item.category.toLowerCase() === category;
		}

		return item;
	});
};
