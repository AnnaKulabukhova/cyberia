'use client';
import type { ProjectsType } from '@components/ProjectsList/model/types/types';
import { createContext } from 'react';

export const ProjectsContext = createContext<ProjectsType | null>(null);
