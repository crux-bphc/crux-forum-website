import clsx from 'clsx';
import React from 'react';
import classes from './Input.module.css';

interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	hasError?: boolean;
}

const Input: React.FC<InputProps> = ({ className, hasError, ...props }) => {
	return (
		<>
			<input
				className={clsx([classes.root, hasError && classes.error, className])}
				{...props}
			/>
		</>
	);
};

export default Input;
