import Stepper from '@/auth-registration/components/Stepper';
import useStepper from '@/auth-registration/hooks/useStepper';
import { NextPage } from 'next';
import React from 'react';
import withApollo from '@/lib/withApollo';
import Spinner from '@/shared/ui/Spinner';
import RegisterForm from '@/auth-registration/components/RegisterForm';
import NotificationsForm from '@/auth-registration/components/NotificationsForm';
import { useLoggedInUserQuery } from '@/graphql/generated';
import RegisterPageLayout from '@/auth-registration/layouts/RegisterPageLayout';

const RegisterIndexPage: NextPage = () => {
	const { loading, data } = useLoggedInUserQuery();
	const { activeStep, onChangeStep } = useStepper(2);

	const [registerFormDetails, setRegisterFormDetails] = React.useState({
		name: '',
		email: '',
		batch: 0,
		discord: '',
		phone: '',
		bio: '',
		file: null as null | File,
	});

	const steps = {
		1: (
			<>
				{data && (
					<RegisterForm {...{ data, onChangeStep, setRegisterFormDetails }} />
				)}
			</>
		),
		2: <>{data && <NotificationsForm {...{ registerFormDetails, data }} />}</>,
	};

	return (
		<>
			<RegisterPageLayout>
				<div className="grid min-h-[80vh] grid-cols-12 p-2">
					<Stepper
						className="col-start-1 col-end-13 self-center md:col-end-3"
						onChangeStep={onChangeStep}
						activeStep={activeStep}
						totalSteps={2}
					/>
					<div className="col-start-1 col-end-13 mt-4 md:col-start-3 md:mt-0">
						{loading && !data?.user && (
							<div className="mt-10 flex items-center justify-center">
								<Spinner />
							</div>
						)}
						{!loading && steps[activeStep as keyof typeof steps]}
					</div>
				</div>
			</RegisterPageLayout>
		</>
	);
};

// @ts-ignore
export default withApollo({ ssr: false })(RegisterIndexPage);
