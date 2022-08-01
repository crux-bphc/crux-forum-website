import clsx from 'clsx';
import React from 'react';
import StepButton from '@/auth-registration/components/StepButton';

interface StepperProps {
	activeStep: number;
	totalSteps: number;
	onChangeStep?: (step: number) => void;
	className?: string;
}

const Stepper: React.FC<StepperProps> = ({
	activeStep,
	totalSteps,
	className,
}) => {
	return (
		<>
			<div className={clsx(className)}>
				<p className="mb-3 text-sm font-bold text-gray-accent md:mb-8">
					Step <span className="text-white">{activeStep}</span> of {totalSteps}
				</p>
				<div className="flex items-center gap-x-3 md:flex md:flex-col md:items-start">
					{Array(totalSteps)
						.fill(0)
						.map((_, i) => (
							<div className="mb-3" key={i}>
								<StepButton isActive={activeStep === i + 1}>{i + 1}</StepButton>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default Stepper;
