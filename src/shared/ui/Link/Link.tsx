import React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

const colors = {
	blue: 'text-blue-400',
	green: 'text-green-400',
	red: 'text-red-400',
	purple: 'text-purple-400',
	teal: 'text-teal-500',
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: React.ReactNode;
	color?: keyof typeof colors;
	className?: string;
}

const Link: React.FC<LinkProps> = ({
	href,
	children,
	color = 'teal',
	className,
	...props
}) => {
	return (
		<>
			<NextLink href={href}>
				<a
					{...props}
					className={clsx([
						'inline-block w-max text-sm underline underline-offset-1',
						colors[color],
						className,
					])}
				>
					{children}
				</a>
			</NextLink>
		</>
	);
};

export default Link;
