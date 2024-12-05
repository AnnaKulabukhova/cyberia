type TypeItem = 'headerMobile' | 'headerDesktop' | 'footer';

export interface NavbarProps {
	className?: string;
	type: TypeItem;
	onClose?: () => void;
}
