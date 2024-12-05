import type { BreadcrumbLinkConfig } from '@appTypes/AppRoutes';
import type { CategoriesProjectsType } from '@components/CategoriesProjectsFilter/model/types';
import type { ProjectsType } from '@components/ProjectsList/model/types/types';

export interface CasesPageProps {
	className?: string;
	breadcrumbs: BreadcrumbLinkConfig[];
	categories: CategoriesProjectsType;
	projects: ProjectsType;
}
