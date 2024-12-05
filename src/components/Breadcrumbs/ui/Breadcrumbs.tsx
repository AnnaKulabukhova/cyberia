import type { BreadcrumbsProps } from '../model/types';
import Link from 'next/link';
import classNames from 'classnames';
import classes from './Breadcrumbs.module.scss';

export const Breadcrumbs = ({ className, breadcrumbs }: BreadcrumbsProps) => {
	return (
		<div className={classNames(className, classes.wrapper)}>
			{breadcrumbs?.map((breadcrumb, index) => {
				const isLast = index === breadcrumbs.length - 1;
				return (
					<span key={breadcrumb.href}>
						<Link
							className={classNames(classes.link, { [classes.active]: isLast })}
							href={breadcrumb.href}>
							{breadcrumb.title}
						</Link>
						{!isLast && <span className={classes.link}>/</span>}
					</span>
				);
			})}
		</div>
	);
};
