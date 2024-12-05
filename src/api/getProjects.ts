import { $api } from '@api/config';
import type { ProjectsType } from '../components/ProjectsList/model/types/types';

export const getProjects = async () => {
	const response = await $api.get<ProjectsType>('/api/v1/projects');
	return response.data;
};
