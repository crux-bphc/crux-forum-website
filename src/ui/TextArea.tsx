import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';
import classes from './styles/TextArea.module.css';

type TextAreaProps = React.DetailedHTMLProps<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {
	textAreaClassName?: string;
	label: string;
	name: string;
};

const TextArea: React.FC<TextAreaProps> = ({
	label,
	className,
	textAreaClassName,
	name,
	required = true,
	...props
}) => {
	const [field, { touched, error }] = useField(name);

	return (
		<div
			className={clsx([
				classes.TextArea,
				touched && error && classes.isInvalid,
			])}
		>
			<label className="block">
				{label}
				{required && <span className={classes.isRequired}> *</span>}
			</label>
			<textarea {...field} {...props} />
			{touched && error && <small>{error}</small>}
		</div>
	);
};

export default TextArea;
