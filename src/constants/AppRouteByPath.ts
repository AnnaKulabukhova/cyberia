import { AppRoutes } from '../types/AppRoutes';
import type { BreadcrumbLinkConfig } from '../types/AppRoutes';

export const breadcrumbsLinks: Record<string, BreadcrumbLinkConfig> = {
	[AppRoutes.Main]: { href: '/', title: 'Главная' },
	[AppRoutes.Cases]: { href: '/cases', title: 'Кейсы' },
};

export const breadcrumbsByPage = {
	[AppRoutes.Main]: () => [breadcrumbsLinks[AppRoutes.Main]],
	[AppRoutes.Cases]: () => [breadcrumbsLinks[AppRoutes.Main], breadcrumbsLinks[AppRoutes.Cases]],
};
