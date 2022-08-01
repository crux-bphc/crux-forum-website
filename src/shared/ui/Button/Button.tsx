import clsx from 'clsx';
import React from 'react';
import Spinner from '../Spinner/Spinner';
import classes from './Button.module.css';

type Variants = 'solid' | 'outline';

const colors = {
	blue: {
		solid: classes.blue,
		outline: classes.blue__outline,
	},
	teal: {
		solid: classes.teal,
		outline: classes.teal__outline,
	},
	green: {
		solid: classes.green,
		outline: classes.green__outline,
	},
	red: {
		solid: classes.red,
		outline: classes.red__outline,
	},
	purple: {
		solid: classes.purple,
		outline: classes.purple__outline,
	},
};

const sizes = {
	small: classes.size__sm,
	medium: classes.size__md,
};

interface ButtonProps {
	children: React.ReactNode;
	color?: keyof typeof colors;
	variant?: Variants;
	isLoading?: boolean;
	loadingText?: string;
	disabled?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	spinnerPlacement?: 'left' | 'right';
	fullWidth?: boolean;
	className?: string;
	size?: keyof typeof sizes;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'solid',
	color = 'teal',
	isLoading,
	loadingText = 'Loading...',
	disabled,
	leftIcon,
	rightIcon,
	spinnerPlacement = 'left',
	fullWidth = false,
	size = 'medium',
	type = 'button',
	onClick,
	className,
}) => {
	return (
		<>
			<button
				type={type}
				onClick={onClick}
				aria-disabled={!!disabled || !!isLoading}
				disabled={disabled || isLoading}
				className={clsx([
					classes.root,
					colors[color][variant],
					sizes[size],
					fullWidth && 'w-full',
					className,
				])}
			>
				{isLoading && (
					<>
						{spinnerPlacement === 'left' && (
							<span className="-ml-1 mr-3">
								<Spinner variant="button" />
							</span>
						)}
						<span>{loadingText}</span>
						{spinnerPlacement === 'right' && (
							<span className="-mr-1 ml-3">
								<Spinner variant="button" />
							</span>
						)}
					</>
				)}

				{!isLoading && (
					<>
						<span className="-ml-1 mr-3">{!!leftIcon && leftIcon}</span>
						<span>{children}</span>
						<span className="-mr-1 ml-3">{!!rightIcon && rightIcon}</span>
					</>
				)}
			</button>
		</>
	);
};

export default Button;
