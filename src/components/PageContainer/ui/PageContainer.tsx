import { Breadcrumbs } from '@components/Breadcrumbs';
import type { PageContainerProps } from '../model/types';
import classes from './PageContainer.module.scss';

export const PageContainer = ({ breadcrumbs, children }: PageContainerProps) => {
	return (
		<div className={classes.pageContainer}>
			<Breadcrumbs
				className={classes.breadcrumbs}
				breadcrumbs={breadcrumbs}
			/>
			{children}
		</div>
	);
};
