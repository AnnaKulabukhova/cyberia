import { $api } from '@api/config';
import type { CategoriesProjectsType } from '@components/CategoriesProjectsFilter/model/types';

export const getCategoriesProjects = async () => {
	const response = await $api.get<CategoriesProjectsType>('/api/v1/project-categories');
	return response.data;
};
