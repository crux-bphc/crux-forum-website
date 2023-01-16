import clsx from 'clsx';
import React from 'react';
import classes from './Checkbox.module.css';

type CheckboxProps = React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>

const Input: React.FC<CheckboxProps> = ({ className, ...props }) => {
	return (
		<>
			<input
				type={'checkbox'}
				className={clsx([classes.root, className])}
				{...props}
			/>
		</>
	);
};

export default Input;
