import clsx from 'clsx';
import React from 'react';
import classes from './styles/ClubTag.module.css';

const colors = {
	cyan: classes.cyan,
	purple: classes.purple,
	green: classes.green,
	red: classes.red,
	blue: classes.blue,
} as { [key: string]: string };

interface ClubTagProps {
	name: string;
	color?: keyof typeof colors;
	isSelected?: boolean;
	variant?: 'display' | 'select';
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
	className?: string;
}

const ClubTag: React.FC<ClubTagProps> = ({
	name,
	color = 'purple',
	isSelected,
	className,
	variant = 'display',
	onClick,
}) => {
	const variantClass =
		variant === 'select'
			? isSelected
				? colors[color]
				: classes.disabled
			: colors[color];

	return (
		<button
			data-testid="club-tag"
			onClick={(e) => onClick?.(e)}
			className={clsx([classes.clubTag, variantClass, className])}
		>
			<span className="text-sm px-2">{name}</span>
		</button>
	);
};

export default ClubTag;
