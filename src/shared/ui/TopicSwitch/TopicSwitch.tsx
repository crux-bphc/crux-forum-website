import clsx from 'clsx';
import React from 'react';

const colors = {
	red: 'bg-red-500 text-gray-800',
	green: 'bg-green-500',
	purple: 'bg-purple-500',
	teal: 'bg-teal-500 text-gray-800',
	blue: 'bg-blue-500',
};

interface TopicSwitchProps {
	color?: keyof typeof colors;
	checked: boolean;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TopicSwitch: React.FC<TopicSwitchProps> = ({
	color = 'purple',
	checked = false,
	children,
	onClick,
}) => {
	return (
		<>
			<button
				onClick={onClick}
				className={clsx([
					'inline-block w-max cursor-pointer rounded-full px-4 py-2 font-semibold',
					checked ? colors[color] : 'bg-gray-disabled',
				])}
			>
				<span style={{ color: 'inherit' }} className="text-md">
					{children}
				</span>
			</button>
		</>
	);
};

export default TopicSwitch;
