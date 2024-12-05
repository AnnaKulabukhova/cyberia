import type { ProjectsType } from '@components/ProjectsList/model/types/types';
import { type ReactNode } from 'react';

export interface ProjectsProviderProps {
	children: ReactNode;
	projects: ProjectsType;
}
