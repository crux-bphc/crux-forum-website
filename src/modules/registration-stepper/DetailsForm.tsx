import React from 'react';
import Image from 'next/image';
import FormInput from '../../ui/FormInput';
import TextArea from '../../ui/TextArea';
import Button from './../../ui/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

interface StepOneProps {
	changeStep: (step: number) => void;
	setAllowStepChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const validationSchema = Yup.object().shape({
	name: Yup.string().required('user must provide their name').trim(),
	email: Yup.string()
		.required('user must provide their email')
		.email('Please provide a valid email')
		.trim(),
	batch: Yup.number()
		.required('user must provide their batch year')
		.max(new Date(Date.now()).getFullYear()),
	phoneNumber: Yup.number().notRequired(),
	bio: Yup.string().min(2).required('this is a required field').trim(),
});

const DetailsForm: React.FC<StepOneProps> = ({
	changeStep,
	setAllowStepChange,
}) => {
	return (
		<div>
			<h1 className="text-2xl sm:text-4xl md:text-5xl">Register</h1>
			<h3 className="text-sm sm:text-base font-normal text-gray-accent my-2">
				Looks like this is your first time here, Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Ipsum, id?
			</h3>

			<Formik
				initialValues={{
					name: 'your-name',
					email: 'your-email@hyderabad.bits-pilani.ac.in',
					bio: '',
					profilePhoto: null,
					phoneNumber: '',
					batch: '',
				}}
				onSubmit={(values) => {
					changeStep(2);
					setAllowStepChange(true);
					localStorage.setItem('formDetails', JSON.stringify(values));
				}}
				validationSchema={validationSchema}
			>
				{({ setFieldValue }) => {
					return (
						<Form
							autoComplete="off"
							className="text-sm sm:text-base grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 gap-y-3 sm:gap-y-6 w-full text-left"
						>
							<FormInput
								onChange={() => {
									setFieldValue('name', 'your-name');
								}}
								disabled={true}
								name="name"
								label="Name"
							/>
							<FormInput
								onChange={() => {
									setFieldValue(
										'email',
										'your-email@hyderabad,bits-pilani.ac.in'
									);
								}}
								disabled={true}
								name="email"
								label="Email"
							/>
							<FormInput name="batch" label="Batch" />
							<FormInput
								required={false}
								name="phoneNumber"
								label="Phone Number"
							/>

							<div>
								<label className="block">Profile Picture</label>
								<div className="mt-1">
									<Image
										height="200px"
										width="200px"
										className="object-cover"
										src={'/images/form-example.png'}
									/>
								</div>
							</div>

							<TextArea name="bio" label="Bio" />

							<div className="py-6">
								<Button type="submit" className="w-full">
									Continue
								</Button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default DetailsForm;
