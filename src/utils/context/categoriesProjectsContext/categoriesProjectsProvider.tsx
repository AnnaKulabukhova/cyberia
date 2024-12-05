'use client';
import { CategoriesProjectsContext } from './categoriesProjectsContext';
import type { CategoriesProjectsProviderProps } from './types';

export const CategoriesProjectsProvider = ({ children, categoriesProjects }: CategoriesProjectsProviderProps) => {
	return (
		<CategoriesProjectsContext.Provider value={categoriesProjects}> {children} </CategoriesProjectsContext.Provider>
	);
};
