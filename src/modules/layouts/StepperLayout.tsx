import React from 'react';
import StepButton from '../registration-stepper/StepButton';

interface StepperProps {
	step: number;
	allowStepChange: boolean;
	changeStep: (step: number) => void;
}

const StepperLayout: React.FC<StepperProps> = ({
	children,
	step,
	changeStep,
	allowStepChange,
}) => {
	return (
		<div className="flex flex-col flex-grow lg:flex-row mx-auto w-5/6 lg:w-3/5 justify-center py-10">
			<div className="lg:flex flex-row lg:flex-col justify-center lg:w-1/6">
				<p className="text-sm text-gray-accent">
					Step&nbsp;
					<span className="font-extrabold text-white">
						{step == 1 ? 'one' : 'two'}
					</span>
					&nbsp;of two
				</p>
				<div className="my-2 sm:my-8 flex lg:block">
					<StepButton
						allowStepChange={true}
						changeStep={changeStep}
						isActiveStep={step === 1}
						toStep={1}
					>
						1
					</StepButton>

					<StepButton
						allowStepChange={allowStepChange}
						changeStep={changeStep}
						isActiveStep={step === 2}
						toStep={2}
					>
						2
					</StepButton>
				</div>
			</div>
			<div className="lg:w-5/6">{children}</div>
		</div>
	);
};

export default StepperLayout;
