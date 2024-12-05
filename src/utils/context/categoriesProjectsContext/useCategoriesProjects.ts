import { CategoriesProjectsContext } from './categoriesProjectsContext';
import { useContext } from 'react';

export const useCategoriesProjects = () => {
	const categories = useContext(CategoriesProjectsContext);
	return categories;
};
