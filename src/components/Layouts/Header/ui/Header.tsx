import type { HeaderProps } from '../model/types';
import Image from 'next/image';
import { Navbar } from '@components/Navbar';
import classNames from 'classnames';
import classes from './Header.module.scss';

export const Header = ({ className }: HeaderProps) => {
	const containerClassName = classNames(classes.header, className);
	return (
		<header className={containerClassName}>
			<div className={classes.container}>
				<Image
					src={'/icons/appLogo.svg'}
					alt='Логотип компании'
					width={131}
					height={28}
					priority
				/>
				<Navbar
					type='headerDesktop'
					className={classes.navbar}
				/>
			</div>
		</header>
	);
};
