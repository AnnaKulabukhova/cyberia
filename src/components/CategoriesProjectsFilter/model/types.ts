export interface Category {
	id: number;
	name: string;
}

export interface CategoriesProjectsType {
	items: Category[];
}

export interface CategoriesProjectsFilterProps {
	className?: string;
	activeCategories: Set<number>;
	onTabClick: (arr: Set<number>) => void;
}
