import Image from 'next/image';
import type { ProjectCardProps } from '@components/ProjectsList/model/types/types';
import classNames from 'classnames';
import classes from './ProjectCardMobile.module.scss';

export const ProjectCardMobile = ({ className, description, image, title }: ProjectCardProps) => {
	const containerClassName = classNames(className, classes.projectCard);

	return (
		<div className={containerClassName}>
			<Image
				alt={title}
				src={image}
				width={327}
				height={320}
			/>
			<div className={classes.info}>
				<Image
					className={classes.icon}
					alt='иконка'
					src={'/icons/project-icon-mobile.svg'}
					width={17}
					height={17}
				/>
				<h4 className={classes.title}>{title}</h4>
				<p className={classes.description}>{description}</p>
			</div>
		</div>
	);
};
