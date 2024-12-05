import type { CategoriesProjectsFilterProps, Category } from '../../model/types';
import classNames from 'classnames';
import classes from './CategoriesProjectsFilter.module.scss';
import { useCategoriesProjects } from '@utils/context/categoriesProjectsContext/useCategoriesProjects';

export const CategoriesProjectsFilter = ({
	className,
	activeCategories,
	onTabClick,
}: CategoriesProjectsFilterProps) => {
	const containerClassName = classNames(className, classes.categoriesProjects);
	const categories = useCategoriesProjects();

	const handleClick = (category: Category) => () => {
		const newActiveCategories = new Set(activeCategories);
		if (newActiveCategories.has(category.id)) {
			newActiveCategories.delete(category.id);
		} else {
			newActiveCategories.add(category.id);
		}
		onTabClick(newActiveCategories);
	};

	return (
		<div className={containerClassName}>
			{categories?.items.map((category) => {
				const isActive = activeCategories.has(category.id);
				const tabClassName = classNames(classes.tab, { [classes.active]: isActive });
				return (
					<button
						onClick={handleClick(category)}
						className={tabClassName}
						key={category.id}>
						{category.name}
					</button>
				);
			})}
		</div>
	);
};
