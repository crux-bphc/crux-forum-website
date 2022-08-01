import clsx from 'clsx';
import { useField } from 'formik';
import React from 'react';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import FormGroup from '../FormGroup/FormGroup';
import FormLabel from '../FormLabel/FormLabel';

import classes from './FormTextArea.module.css';

interface FormTextAreaProps {
	label: string;
	required?: boolean;
	id: HTMLTextAreaElement['id'];
	name: HTMLTextAreaElement['name'];
	rows?: number;
	placeholder?: HTMLTextAreaElement['placeholder'];
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
	name,
	label,
	required = true,
	id,
	placeholder,
	rows,
}) => {
	const [{ onBlur, onChange }, { touched, value, error }] = useField(name);

	return (
		<>
			<FormGroup>
				<FormLabel label={label} required={required} />
				<textarea
					{...{ value, rows, name, id, placeholder, onBlur, onChange }}
					className={clsx([classes.root, touched && error && classes.error])}
				/>
				{!!touched && !!error && <FormErrorMessage error={error} />}
			</FormGroup>
		</>
	);
};

export default FormTextArea;
