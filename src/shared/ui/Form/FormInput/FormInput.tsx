import { useField } from 'formik';
import React from 'react';
import Input from '../../Input/Input';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';
import FormGroup from '../FormGroup/FormGroup';
import FormLabel from '../FormLabel/FormLabel';

interface FormInputProps {
	label: string;
	required?: boolean;
	type?: HTMLInputElement['type'];
	id: HTMLInputElement['id'];
	name: HTMLInputElement['name'];
	placeholder?: HTMLInputElement['placeholder'];
	disabled?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
	name,
	label,
	required = true,
	type = 'text',
	id,
	disabled,
	placeholder,
}) => {
	const [{ onBlur, onChange }, { touched, value, error }] = useField(name);

	return (
		<>
			<FormGroup>
				<FormLabel label={label} required={required} />
				<Input
					disabled={disabled}
					className="mb-2"
					hasError={touched && !!error}
					{...{
						onBlur,
						onChange,
						type,
						value,
						id,
						name,
						placeholder,
						required,
					}}
				/>
				{!!touched && !!error && <FormErrorMessage error={error} />}
			</FormGroup>
		</>
	);
};

export default FormInput;
