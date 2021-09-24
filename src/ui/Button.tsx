import React from 'react';
import Loader from './Loader';
import clsx from 'clsx';
import classes from './styles/Button.module.css';

const variants = {
	cyan: classes.cyan,
	green: classes.green,
	purple: classes.purple,
	red: classes.red,
	'cyan-outline': classes.cyan__outline,
	'green-outline': classes.green__outline,
	'purple-outline': classes.purple__outline,
	'red-outline': classes.red__outline,
	disabled: classes.disabled,
};

const sizes = {
	md: '',
	sm: 'p-2 text-sm',
};

type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	isLoading?: boolean;
	icon?: React.ReactNode;
	size?: 'md' | 'sm';
	variant?: keyof typeof variants;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			size = 'md',
			children,
			isLoading,
			icon,
			disabled,
			className,
			variant = 'cyan',
			...rest
		} = props;

		return (
			<>
				<button
					ref={ref}
					data-testid="btn"
					disabled={disabled || isLoading}
					{...rest}
					className={clsx(
						classes.btn,
						sizes[size],
						variants[disabled || isLoading ? 'disabled' : variant],
						className
					)}
				>
					{!isLoading && icon && <span data-testid="btn-icon">{icon}</span>}
					{isLoading && (
						<Loader
							data-testid="btn-loading"
							variant="button"
							color="currentColor"
						/>
					)}
					<span>{children}</span>
				</button>
			</>
		);
	}
);

Button.displayName = 'Button';

export default Button;
