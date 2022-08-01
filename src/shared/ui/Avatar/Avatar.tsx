import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const sizes = {
	'x-small': { value: '40px', className: 'h-[40px]' },
	small: { value: '60px', className: 'h-[60px]' },
	medium: { value: '100px', className: 'md:h-[100px] h-[65px]' },
	large: { value: '160px', className: 'md:h-[160px] h-[120px]' },
};

interface AvatarProps {
	size?: keyof typeof sizes;
	src?: string;
	alt?: string;
	unoptimized?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
	size = 'medium',
	src,
	alt = 'Profile Image',
	unoptimized = false,
}) => {
	return (
		<>
			<Image
				loading="lazy"
				className={clsx(['rounded-full', sizes[size].className])}
				src={src || '/profile.svg'}
				height={sizes[size].value}
				width={sizes[size].value}
				alt={alt}
				unoptimized={unoptimized}
			/>
		</>
	);
};

export default Avatar;
