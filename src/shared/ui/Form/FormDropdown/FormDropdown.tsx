import React, { SyntheticEvent } from 'react';
import FormGroup from '../FormGroup/FormGroup';

interface LabelValuePair {
	label: string;
	value: string;
}

interface FormDropdownProps {
	required?: boolean;
	id: HTMLInputElement['id'];
	options: LabelValuePair[];
	value: string;
	disabled?: boolean;
}

const FormDropdown: React.FC<FormDropdownProps> = ({
	required = true,
	id,
	options,
	value = options[0].value,
	disabled = false,
}) => {
	const [optionsValue, setOptionsValue] = React.useState<string>(value);

	const handleChange = (event: SyntheticEvent) => {
		setOptionsValue((event.target as HTMLInputElement).value);
	};

	return (
		<>
			<FormGroup>
				<select
					value={optionsValue}
					onChange={handleChange}
					className="rounded-md bg-gray-900"
					{...{
						id,
						required,
						disabled,
					}}
				>
					{options.map((option) => (
						<option value={option.value} key={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</FormGroup>
		</>
	);
};

export default FormDropdown;
