import type { CategoriesProjectsType } from '@components/CategoriesProjectsFilter/model/types';
import type { ReactNode } from 'react';

export interface CategoriesProjectsProviderProps {
	children: ReactNode;
	categoriesProjects: CategoriesProjectsType;
}
