import { ProjectsContext } from './projectsContext';
import { useContext } from 'react';

export const useProjects = () => {
	const projects = useContext(ProjectsContext);
	return projects;
};
