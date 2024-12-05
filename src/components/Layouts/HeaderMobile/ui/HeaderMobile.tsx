'use client';
import { Button } from '@components/ui/Button';
import Image from 'next/image';
import { ModalNavigation } from '@components/ModalNavigation';
import classes from './HeaderMobile.module.scss';
import { useBoolean } from '@utils/lib/useBoolean';

export const HeaderMobile = () => {
	const { value, setFalse, setTrue } = useBoolean(false);

	const handleCloseModal = setFalse;
	const handleOpenModal = setTrue;

	return (
		<header className={classes.headerMobile}>
			<div className={classes.container}>
				<Image
					src={'/icons/appLogo.svg'}
					alt='Логотип компании'
					width={93}
					height={20}
					priority
				/>
				<menu>
					<Button
						onClick={handleOpenModal}
						className={classes.button}
						variant='clear'>
						<Image
							src={'/icons/menu-burger.svg'}
							alt='Меню'
							width={32}
							height={32}
						/>
					</Button>
					{value && (
						<ModalNavigation
							className={classes.modal}
							onClose={handleCloseModal}
						/>
					)}
				</menu>
			</div>
		</header>
	);
};
