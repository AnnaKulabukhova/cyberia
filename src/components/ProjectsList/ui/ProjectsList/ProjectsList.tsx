'use client';
import { ProjectCardDesktop } from '../ProjectCardDesktop/ProjectCardDesktop';
import { ProjectCardMobile } from '../ProjectCardMobile/ProjectCardMobile';
import type { ProjectsListProps } from '../../model/types/types';
import classNames from 'classnames';
import classes from './ProjectsList.module.scss';
import { useDevice } from '@utils/context/deviceContext/useDevice';
import { useFilteredProjects } from '@components/ProjectsList/model/hooks/useFilteredProjects';
import { useProjects } from '@utils/context/projectsContext/useProjects';

export const ProjectsList = ({ className, activeCategories }: ProjectsListProps) => {
	const containerClassName = classNames(className, classes.projects);

	const { isDesktop } = useDevice();
	const ProjectCard = isDesktop ? ProjectCardDesktop : ProjectCardMobile;
	const projects = useProjects();

	const filteredProjects = useFilteredProjects(projects?.items || [], activeCategories);

	if (!projects) {
		return <h3>Кейсов не найдено</h3>;
	}

	return (
		<div className={containerClassName}>
			{filteredProjects?.map((project) => (
				<ProjectCard
					key={project.id}
					description={project.description}
					image={project.image}
					title={project.title}
				/>
			))}
		</div>
	);
};
