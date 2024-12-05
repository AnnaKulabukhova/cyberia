import { Button } from '@components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import type { ModalNavigationProps } from '../model/types';
import { Navbar } from '@components/Navbar';
import { Portal } from '@components/ui/Portal';
import classNames from 'classnames';
import classes from './ModalNavigation.module.scss';

export const ModalNavigation = ({ onClose, className }: ModalNavigationProps) => {
	const classnameContainer = classNames(className, classes.modalNavigation);
	return (
		<Portal>
			<div className={classnameContainer}>
				<div className={classes.buttonWrapper}>
					<Button
						variant='clear'
						onClick={onClose}
						className={classes.button}>
						<Image
							src='/icons/close.svg'
							width={32}
							height={32}
							alt='Закрыть окно'
						/>
					</Button>
				</div>

				<Navbar
					onClose={onClose}
					type='headerMobile'
					className={classes.navbar}
				/>
				<div className={classes.contacts}>
					<h2 className={classes.subtitle}>Контакты:</h2>
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
			</div>
		</Portal>
	);
};
