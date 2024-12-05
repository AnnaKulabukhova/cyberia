'use client';
import { useCallback, useState } from 'react';
import { CategoriesProjectsFilter } from '@components/CategoriesProjectsFilter';
import { ProjectsList } from '@components/ProjectsList';
import classes from './Projects.module.scss';

export const Projects = () => {
	const [activeCategories, setActiveCategories] = useState(new Set<number>());

	const onChangeActiveCategories = useCallback((value: Set<number>) => {
		setActiveCategories(value);
	}, []);

	return (
		<div className={classes.wrapper}>
			<CategoriesProjectsFilter
				onTabClick={onChangeActiveCategories}
				activeCategories={activeCategories}
			/>
			<ProjectsList activeCategories={activeCategories} />
		</div>
	);
};
