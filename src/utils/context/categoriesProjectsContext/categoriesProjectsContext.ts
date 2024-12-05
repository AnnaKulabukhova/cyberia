'use client';
import type { CategoriesProjectsType } from '@components/CategoriesProjectsFilter/model/types';
import { createContext } from 'react';

export const CategoriesProjectsContext = createContext<CategoriesProjectsType | null>(null);
