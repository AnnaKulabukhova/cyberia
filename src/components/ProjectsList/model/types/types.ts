export interface ProjectType {
	id: number;
	title: string;
	slug: string;
	project_url: null;
	image: string;
	image_dark: string;
	description: string;
	geo: {
		lat: null;
		lng: null;
	};
	categories: [
		{
			id: number;
			name: string;
		},
	];
}

export interface ProjectsType {
	items: ProjectType[];
}

export interface ProjectsListProps {
	className?: string;
	activeCategories: Set<number>;
}

export interface ProjectCardProps {
	className?: string;
	title: string;
	description: string;
	image: string;
}
