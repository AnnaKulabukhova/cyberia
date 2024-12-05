'use client';
import type { CasesPageProps } from '../model/types';
import { CategoriesProjectsProvider } from '@utils/context/categoriesProjectsContext/categoriesProjectsProvider';
import { FeedbackForm } from '@components/FeedbackForm';
import { PageContainer } from '@components/PageContainer';
import { Projects } from '@components/Projects';
import { ProjectsProvider } from '@utils/context/projectsContext/ProjectsProvider';
import classes from './CasesPage.module.scss';

export const CasesPage = ({ breadcrumbs, categories, projects }: CasesPageProps) => {
	return (
		<CategoriesProjectsProvider categoriesProjects={categories}>
			<ProjectsProvider projects={projects}>
				<PageContainer breadcrumbs={breadcrumbs}>
					<h1 className={classes.titlePage}>Кейсы</h1>
					<Projects />
					<FeedbackForm />
				</PageContainer>
			</ProjectsProvider>
		</CategoriesProjectsProvider>
	);
};
