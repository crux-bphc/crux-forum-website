import clsx from 'clsx';
import React from 'react';
import classes from './styles/FeedClubTag.module.css';

const colors = {
	cyan: 'bg-cyan text-black',
	purple: 'bg-purple',
	green: 'bg-green',
	red: 'bg-red',
	blue: 'bg-blue',
} as { [key: string]: string };

interface FeedClubTagProps {
	name: string;
	color?: keyof typeof colors;

	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	className?: string;
}

const FeedClubTag: React.FC<FeedClubTagProps> = ({
	name,
	color = 'purple',
	className,
	onClick,
}) => {
	return (
		<button
			data-testid="feed-club-tag"
			onClick={(e) => onClick?.(e)}
			className={clsx([classes.feedClubTag, colors[color], className])}
		>
			<span className="text-xs">{name}</span>
		</button>
	);
};

export default FeedClubTag;
