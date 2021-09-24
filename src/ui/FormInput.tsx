import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';
import classes from './styles/FormInput.module.css';

type FormInputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	name: string;
	label: string;
	error?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
	label,
	name,
	type = 'text',
	required = true,
	disabled,
	...props
}) => {
	const [field, { error, touched }] = useField(name);

	return (
		<div
			data-testid="form-input"
			className={clsx([
				classes.formInput,
				touched && error && classes.isInvalid,
				disabled && classes.isDisabled,
			])}
		>
			<label className="block">
				{label} {required && <span className={classes.isRequired}>*</span>}
			</label>
			<input disabled={disabled} type={type} {...field} {...props} />
			{touched && error && <small>{error}</small>}
		</div>
	);
};

export default FormInput;
