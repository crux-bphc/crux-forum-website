import clsx from 'clsx';
import React from 'react';
import classes from './styles/StepButton.module.css';

interface StepButtonProps {
	allowStepChange: boolean;
	changeStep: (n: number) => void;
	isActiveStep: boolean;
	toStep: number;
}

const StepButton: React.FC<StepButtonProps> = ({
	allowStepChange,
	changeStep,
	isActiveStep,
	children,
	toStep,
}) => {
	return (
		<>
			<button
				onClick={() => {
					if (allowStepChange) {
						changeStep(toStep);
					}
				}}
				disabled={!allowStepChange}
				className={clsx([
					classes.StepButton,
					isActiveStep && classes.StepButtonActive,
					!allowStepChange && classes.StepButtonDisabled,
				])}
			>
				{children}
			</button>
		</>
	);
};

export default StepButton;
