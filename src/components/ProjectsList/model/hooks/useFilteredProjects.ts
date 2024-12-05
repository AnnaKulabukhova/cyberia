import type { ProjectType } from '../types/types';

export const useFilteredProjects = (projects: ProjectType[], activeCategories: Set<number>) => {
	if (activeCategories.size === 0) {
		return projects;
	} else {
		return projects.filter((project) => project.categories.some((el) => activeCategories.has(el.id)));
	}
};
