import { AppRoutes } from '@appTypes/AppRoutes';

interface NavLinksType {
	href: AppRoutes;
	content: string;
}

export const navLinks: NavLinksType[] = [
	{
		href: AppRoutes.Agency,
		content: 'Агентство',
	},
	{
		href: AppRoutes.Services,
		content: 'Услуги',
	},
	{
		href: AppRoutes.Cases,
		content: 'Кейсы',
	},
	{
		href: AppRoutes.Blog,
		content: 'Блог',
	},
	{
		href: AppRoutes.Contacts,
		content: 'Контакты',
	},
];
