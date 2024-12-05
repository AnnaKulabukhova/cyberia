import Link from 'next/link';
import type { NavbarProps } from '../model/types/types';
import classes from './Navbar.module.scss';
import { navLinks } from '../model/constants/navLinks';

export const Navbar = ({ className, type, onClose }: NavbarProps) => {
	return (
		<nav className={className}>
			{navLinks.map((link) => (
				<button
					className={classes.button}
					onClick={onClose}
					key={link.href}>
					<Link
						className={classes[type]}
						href={link.href}>
						{link.content}
					</Link>
				</button>
			))}
		</nav>
	);
};
