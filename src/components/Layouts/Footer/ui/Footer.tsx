import type { FooterProps } from '../model/types';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@components/Navbar';
import classNames from 'classnames';
import classes from './Footer.module.scss';

export const Footer = ({ className }: FooterProps) => {
	const containerClassName = classNames(classes.footer, className);

	return (
		<footer className={containerClassName}>
			<div className={classes.container}>
				<div className={classes.about}>
					<Image
						src={'/icons/appLogo.svg'}
						alt='Логотип компании'
						width={196}
						height={41}
						className={classes.image}
					/>
					<span className={classes.description}>Веб-разработка и усиление IT-команд</span>
				</div>
				<div className={classes.inner}>
					<div className={classes.info}>
						<Link
							className={classes.contact}
							href='tel:+79991234567'>
							<span>+7 999 123 45 67</span>
						</Link>
						<Link
							className={classes.contact}
							href='mailto:hello@cyberia.studio'>
							<span>hello@cyberia.studio</span>
						</Link>
						<address className={classNames(classes.address, classes.contact)}>ул.Ярных, д.35, оф.10</address>
					</div>
					<Navbar
						type='footer'
						className={classes.navbar}
					/>
				</div>
			</div>
		</footer>
	);
};
