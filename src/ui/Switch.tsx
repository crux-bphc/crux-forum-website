import React from 'react';
import classes from './styles/Switch.module.css';
import clsx from 'clsx';

const variants = {
	cyan: 'bg-cyan',
	green: 'bg-green',
	red: 'bg-red',
	purple: 'bg-purple',
	gray: 'bg-gray-900',
};

const sizes = {
	xs: {
		bg: 'h-[17px] w-[34px]',
		thumb: 'h-[17px] w-[17px]',
		active: 'w-[21px]',
		checked: 'left-[32px] translate-x-[-100%]',
	},
	sm: {
		bg: 'h-[25px] w-[50px]',
		thumb: 'h-[22px] w-[22px]',
		active: 'w-[28px]',
		checked: 'left-[48px] translate-x-[-100%]',
	},
	md: {
		bg: 'h-[38px] w-[75px]',
		thumb: 'h-[34px] w-[34px]',
		active: 'w-[43px]',
		checked: 'left-[73px] translate-x-[-100%]',
	},
	lg: {
		bg: 'h-[50px] w-[100px]',
		thumb: 'h-[45px] w-[45px]',
		active: 'w-[60px]',
		checked: 'left-[98px] translate-x-[-100%]',
	},
};

interface SwitchProps {
	active: boolean;
	id: string;
	onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
	left?: React.ReactNode;
	right?: React.ReactNode;
	checkboxStyle?: React.CSSProperties;
	variantChecked?: keyof typeof variants;
	variantUnchecked?: keyof typeof variants;
	size?: keyof typeof sizes;
}

const Switch: React.FC<SwitchProps> = ({
	id,
	active,
	left,
	right,
	onChange,
	variantChecked = 'cyan',
	variantUnchecked = 'gray',
	size = 'md',
}) => {
	return (
		<>
			<div className="flex items-center select-none">
				{left ? left : null}
				<input
					data-testid="switch-input"
					type="checkbox"
					id={'switch' + id}
					className={clsx([classes.switchInput])}
					onChange={onChange}
				></input>
				<label
					data-testid="switch"
					htmlFor={'switch' + id}
					className={clsx(
						classes.switchLabel,
						sizes[size].bg,
						active ? variants[variantChecked] : variants[variantUnchecked],
						'group',
						left ? 'ml-3' : '',
						right ? 'mr-3' : ''
					)}
				>
					<span
						data-testid="switch-thumb"
						className={clsx(
							classes.switchThumb,
							sizes[size].thumb,
							active ? sizes[size].checked : 'left-[2px]',
							`bg-white group-active:${sizes[size].active}`
						)}
					></span>
				</label>
				{right ? right : null}
			</div>
		</>
	);
};

export default Switch;
