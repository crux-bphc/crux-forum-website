import React from 'react';
import { Switch as HSwitch } from '@headlessui/react';
import classes from './Switch.module.css';
import clsx from 'clsx';

const colors = {
	teal: 'bg-teal-500',
	purple: 'bg-purple-500',
	red: 'bg-red-500',
	green: 'bg-green-500',
	blue: 'bg-blue-500',
};

const sizes = {
	medium: {
		root: classes.size__root__md,
		thumb: classes.size__thumb__md,
	},
	large: {
		root: classes.size__root__lg,
		thumb: classes.size__thumb__lg,
	},
};

const checkedClassNames = {
	medium: {
		thumb: 'translate-x-7',
	},
	large: {
		thumb: 'translate-x-9',
	},
};

interface SwitchProps {
	checked: boolean;
	onChange: () => void;
	size?: keyof typeof sizes;
	color?: keyof typeof colors;
	label?: string;
	labelPlacement?: 'left' | 'right';
	name?: string;
}

const Switch: React.FC<SwitchProps> = ({
	checked,
	onChange,
	size = 'medium',
	color = 'teal',
	label,
	labelPlacement = 'left',
	name,
}) => {
	const component = (
		<HSwitch
			name={name}
			checked={checked}
			onChange={onChange}
			className={clsx([
				classes.root,
				sizes[size]['root'],
				checked ? colors[color] : 'bg-gray-900',
			])}
		>
			<span
				aria-hidden="true"
				className={clsx([
					classes.thumb,
					sizes[size]['thumb'],
					checked ? checkedClassNames[size]['thumb'] : 'translate-x-0',
				])}
			/>
		</HSwitch>
	);

	if (label) {
		return (
			<HSwitch.Group>
				<div className="flex items-center">
					{labelPlacement === 'left' && (
						<HSwitch.Label className="mr-3 cursor-pointer select-none font-semibold">
							{label}
						</HSwitch.Label>
					)}
					<span>{component}</span>
					{labelPlacement === 'right' && (
						<HSwitch.Label className="ml-3 cursor-pointer font-semibold">
							{label}
						</HSwitch.Label>
					)}
				</div>
			</HSwitch.Group>
		);
	}

	return <>{component}</>;
};

export default Switch;
