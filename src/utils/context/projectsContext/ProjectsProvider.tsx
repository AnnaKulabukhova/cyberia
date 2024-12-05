'use client';
import { ProjectsContext } from './projectsContext';
import type { ProjectsProviderProps } from './types';

export const ProjectsProvider = ({ children, projects }: ProjectsProviderProps) => {
	return <ProjectsContext.Provider value={projects}> {children} </ProjectsContext.Provider>;
};
