import React from 'react';

const useStepper = (initialStep = 0) => {
	const [activeStep, setActiveStep] = React.useState<number>(initialStep);

	const onChangeStep = (step: number) => {
		setActiveStep(step);
	};

	return {
		activeStep,
		onChangeStep,
	};
};

export default useStepper;
