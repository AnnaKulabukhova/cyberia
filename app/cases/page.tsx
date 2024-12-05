import { notFound, redirect } from 'next/navigation';
import { AppRoutes } from '@appTypes/AppRoutes';
import { CasesPage } from '@components/CasesPage';
import { breadcrumbsByPage } from '@constants/AppRouteByPath';
import { getCategoriesProjects } from '@api/getCategoriesProjects';
import { getProjects } from '@api/getProjects';

export default async function Cases() {
	const breadcrumbs = breadcrumbsByPage[AppRoutes.Cases]();

	try {
		const [categories, projects] = await Promise.all([getCategoriesProjects(), getProjects()]);

		if (!categories || !projects) {
			redirect('/500');
		}

		return (
			<CasesPage
				projects={projects}
				categories={categories}
				breadcrumbs={breadcrumbs}
			/>
		);
	} catch {
		notFound();
	}
}
