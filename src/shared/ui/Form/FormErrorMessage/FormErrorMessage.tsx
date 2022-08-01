import React from 'react';
import { HiExclamationCircle } from 'react-icons/hi';

interface FormErrorMessageProps {
	error: string;
}

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ error }) => {
	return (
		<>
			<div className="flex items-center gap-2" role="alert">
				<span>
					<HiExclamationCircle className="text-red-500" />
				</span>
				<p className="text-sm text-red-500">{error}</p>
			</div>
		</>
	);
};

export default FormErrorMessage;
