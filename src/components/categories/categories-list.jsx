import { CategoryItem } from "./categories-item";

export const CategoriesList = ({ items = [] }) => {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{items.map((item) => (
				<CategoryItem key={item.id} label={item.label} query={item.query} />
			))}
		</div>
	);
};
