import { LoggedInUserQuery } from '@/graphql/generated';
import Button from '@/shared/ui/Button';
import Card from '@/shared/ui/Card';
import FormErrorMessage from '@/shared/ui/Form/FormErrorMessage';
import FormInput from '@/shared/ui/Form/FormInput';
import FormLabel from '@/shared/ui/Form/FormLabel';
import FormTextArea from '@/shared/ui/Form/FormTextArea';
import clsx from 'clsx';
import { Formik, Form } from 'formik';
import Image from 'next/image';
import React from 'react';
import Dropzone from 'react-dropzone';
import { MdChevronRight } from 'react-icons/md';
import * as Yup from 'yup';

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const discordRegExp = /^((.+?)#\d{4})/;

const validationSchema = Yup.object().shape({
	name: Yup.string().required('User must provide their name').trim(),
	email: Yup.string()
		.required('User must provide their email')
		.email('Please provide a valid email')
		.matches(
			/^f\d{8}@hyderabad\.bits-pilani\.ac\.in$/,
			'Please use your BITS Mail'
		)
		.trim(),
	discord: Yup.string()
		.required('Discord username is a required field')
		.matches(discordRegExp, 'Discord username is not valid'),
	phoneNumber: Yup.string()
		.required('Phone number is a required field')
		.matches(phoneRegExp, 'Phone number is not valid')
		.length(10),
	bio: Yup.string().min(2).required('Bio is a required field').trim(),
	photo: Yup.mixed().required('Profile picture is a required field'),
});

interface RegisterFormProps {
	data: LoggedInUserQuery;
	onChangeStep: (step: number) => void;
	setRegisterFormDetails: React.Dispatch<
		React.SetStateAction<{
			name: string;
			email: string;
			discord: string;
			batch: number;
			phone: string;
			bio: string;
			file: File | null;
		}>
	>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
	data,
	onChangeStep,
	setRegisterFormDetails,
}) => {
	return (
		<>
			<h1 className="mb-3 text-5xl font-bold">Register</h1>
			<h5 className="mb-5 text-gray-accent">
				Looks like this is your first time here.
			</h5>
			<Formik
				validationSchema={validationSchema}
				initialValues={{
					name: data?.user?.name || '',
					email: data?.user?.email || '',
					discord: '',
					phoneNumber: '',
					bio: '',
					photo: null as null | File,
				}}
				onSubmit={({ name, email, discord, bio, phoneNumber, photo }) => {
					setRegisterFormDetails({
						email,
						name,
						batch: parseInt(email.split('f')[1].slice(0, 4)),
						bio,
						discord,
						phone: phoneNumber,
						file: photo,
					});

					onChangeStep(2);
				}}
			>
				{({ setValues, values, errors, setFieldError, touched }) => (
					<Form data-testid="registration-form" noValidate>
						<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
							<FormInput
								disabled={!!data?.user?.name}
								name="name"
								id="name"
								label="Name"
							/>
							<FormInput
								disabled={!!data?.user?.email}
								name="email"
								id="email"
								label="Email"
							/>
							<FormInput
								placeholder="Example: username#1234"
								name="discord"
								id="discord"
								label="Discord Username"
							/>
							<FormInput
								name="phoneNumber"
								id="phoneNumber"
								label="Phone Number"
								placeholder="Example: 9871234560"
							/>
							<div className="mb-4 md:mb-0">
								<FormLabel label="Profile Photo" />
								<Dropzone
									accept={{
										'image/jpeg': [],
										'image/jpg': [],
										'image/png': [],
									}}
									multiple={false}
									onDrop={(acceptedFiles) => {
										if (acceptedFiles && acceptedFiles[0]) {
											setValues({
												...values,
												photo: acceptedFiles[0],
											});
										}
									}}
									validator={(file) => {
										if (!file.type.startsWith('image')) {
											setFieldError(
												'photo',
												'Please upload a photo in .jpg, .jpeg, or .png format'
											);

											return null;
										}

										if (file.size > 1000000) {
											setFieldError(
												'photo',
												'Photo size must be less than 1MB'
											);

											return null;
										}

										return null;
									}}
								>
									{({ getRootProps, getInputProps }) => (
										<>
											<Card
												className={clsx([
													'cursor-pointer border-2 !bg-gray-900',
													touched.photo && errors.photo && 'border-red-500',
												])}
											>
												<div {...getRootProps()}>
													<input
														name="photo"
														id="photo"
														accept=".png, .jpg, .jpeg"
														{...getInputProps()}
													/>
													<div className="text-center">
														Drag and drop some files here, <br />
														or click to select files <br />
														{!values.photo && (
															<Image
																src={'/profile-picture.png'}
																alt="profile picture preview"
																height={120}
																width={120}
															/>
														)}
														{values.photo && (
															<div className="pt-2">
																<Image
																	className="rounded-full"
																	src={URL.createObjectURL(values.photo)}
																	alt="profile picture preview"
																	height={110}
																	width={110}
																/>
															</div>
														)}
													</div>
												</div>
											</Card>
											{touched.photo && errors.photo && (
												<FormErrorMessage error={errors.photo} />
											)}
										</>
									)}
								</Dropzone>
							</div>
							<FormTextArea name="bio" id="bio" label="Bio" rows={8} />
						</div>
						<div className="mt-4 text-right">
							<Button type="submit" rightIcon={<MdChevronRight size={20} />}>
								Continue
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default RegisterForm;
