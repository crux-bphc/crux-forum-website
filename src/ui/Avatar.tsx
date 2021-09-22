import React from 'react';
import clsx from 'clsx';
import classes from './styles/Avatar.module.css';

const sizes = {
	xs: 'h-[40px]',
	sm: 'h-[60px]',
	md: 'md:h-[100px] h-[65px]',
	lg: 'md:h-[160px] h-[120px]',
};

type AvatarProps = React.DetailedHTMLProps<
	React.ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
> & {
	size?: keyof typeof sizes;
};

const Avatar: React.FC<AvatarProps> = ({
	src = '/profile.svg',
	alt = 'profile',
	size = 'md',
	className,
	...props
}) => {
	return (
		<>
			<img
				data-testid="avatar"
				id={`avatar-${size}`}
				className={clsx([classes.avatar, sizes[size], className])}
				src={src}
				alt={alt}
				{...props}
			/>
		</>
	);
};

export default Avatar;
