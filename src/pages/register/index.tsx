import clsx from 'clsx';
import React from 'react';
import SignUpLayout from '../../modules/layouts/SignUpLayout';
import StepperLayout from '../../modules/layouts/StepperLayout';
import DetailsForm from '../../modules/registration-stepper/DetailsForm';
import NotificationsForm from '../../modules/registration-stepper/NotificationsForm';

const Registerr: React.FC = () => {
	const [step, setStep] = React.useState<number>(1);
	const [allowStepChange, setAllowStepChange] = React.useState(false);

	const changeStep = (step: number) => {
		setStep(step);
	};

	return (
		<SignUpLayout>
			<StepperLayout
				changeStep={changeStep}
				allowStepChange={allowStepChange}
				step={step}
			>
				<div className={clsx([step === 2 && 'hidden'])}>
					<DetailsForm
						changeStep={changeStep}
						setAllowStepChange={setAllowStepChange}
					/>
				</div>
				<div className={clsx([step === 1 && 'hidden'])}>
					<NotificationsForm />
				</div>
			</StepperLayout>
		</SignUpLayout>
	);
};

export default Registerr;
