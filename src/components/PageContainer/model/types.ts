import type { BreadcrumbLinkConfig } from '@appTypes/AppRoutes';
import type { ReactNode } from 'react';

export interface PageContainerProps {
	breadcrumbs: BreadcrumbLinkConfig[];
	children: ReactNode;
}
