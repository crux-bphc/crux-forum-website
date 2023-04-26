import React from 'react';
import clsx from 'clsx';
import classes from './IconButton.module.css';

const colors = {
	teal: {
		solid: classes.teal,
		text: classes.teal__text,
	},
	purple: {
		solid: classes.purple,
		text: classes.purple__text,
	},
	red: {
		solid: classes.red,
		text: classes.red__text,
	},
	green: {
		solid: classes.green,
		text: classes.green__text,
	},
	blue: {
		solid: classes.blue,
		text: classes.blue__text,
	},
};

interface IconButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: React.ReactNode;
	color?: keyof typeof colors;
	variant?: 'solid' | 'text';
	isLink?: boolean;
	className?: string;
}

const IconButton = React.forwardRef(
	(props: IconButtonProps, ref: React.Ref<HTMLButtonElement>) => {
		const {
			icon,
			color = 'teal',
			variant = 'solid',
			isLink = false,
			className,
			...rest
		} = props;

		const classNames = clsx(classes.root, colors[color][variant], className);

		if (isLink) {
			return (
				<a className={classNames} {...rest}>
					{icon}
				</a>
			);
		}

		return (
			<button ref={ref} className={classNames} {...rest}>
				{icon}
			</button>
		);
	}
);

IconButton.displayName = 'IconButton';

export default IconButton;
