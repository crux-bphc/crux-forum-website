import clsx from 'clsx';
import React from 'react';

const colors = {
	red: 'bg-red-500 text-gray-800',
	green: 'bg-green-500',
	purple: 'bg-purple-500',
	teal: 'bg-teal-500 text-gray-800',
	blue: 'bg-blue-500',
};

interface TagProps {
	color?: keyof typeof colors;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Tag: React.FC<TagProps> = ({ color = 'purple', children, onClick }) => {
	return (
		<>
			<button
				onClick={onClick}
				className={clsx([
					'inline-block w-max cursor-pointer rounded px-2 py-0.5 font-semibold',
					colors[color],
				])}
			>
				<span style={{ color: 'inherit' }} className="text-sm">
					{children}
				</span>
			</button>
		</>
	);
};

export default Tag;
