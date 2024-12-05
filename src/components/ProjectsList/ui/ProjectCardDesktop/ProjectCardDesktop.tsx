import Image from 'next/image';
import type { ProjectCardProps } from '@components/ProjectsList/model/types/types';
import classNames from 'classnames';
import classes from './ProjectCardDesktop.module.scss';

export const ProjectCardDesktop = ({ className, description, image, title }: ProjectCardProps) => {
	const containerClassName = classNames(className, classes.projectCard);

	return (
		<div className={containerClassName}>
			<Image
				alt={title}
				src={image}
				width={387}
				height={378}
				className={classes.image}
			/>
			<div className={classes.titleContainer}>
				<h4 className={classes.title}>{title}</h4>
				<Image
					className={classes.icon}
					alt='иконка'
					src={'/icons/project-icon-desktop.svg'}
					width={25}
					height={25}
				/>
			</div>
			<div className={classes.descriptionContainer}>
				<p className={classes.description}>{description}</p>
			</div>
		</div>
	);
};
