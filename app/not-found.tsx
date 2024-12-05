import classes from './not-found.module.scss';

export default function NotFound() {
	return (
		<div className={classes.wrapper}>
			<span className={classes.text}> Страница не найдена</span>
		</div>
	);
}
