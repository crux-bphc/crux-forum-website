import React from 'react';

interface FormLabelProps {
	required?: boolean;
	label: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ required, label }) => {
	return (
		<>
			<label htmlFor="email" className="mb-2 block text-sm">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
		</>
	);
};

export default FormLabel;
