import {
	LoggedInUserDocument,
	LoggedInUserQuery,
	useCreateFileUploadUrlLazyQuery,
	useFinishRegistrationMutation,
	useLoggedInUserQuery,
} from '@/graphql/generated';
import Button from '@/shared/ui/Button';
import Link from '@/shared/ui/Link';
import Switch from '@/shared/ui/Switch';
import { useApolloClient } from '@apollo/client';
import { Form, Formik } from 'formik';
import React from 'react';
import slugify from 'slugify';

interface NotificationsFormProps {
	registerFormDetails: {
		name: string;
		email: string;
		batch: number;
		discord: string;
		phone: string;
		bio: string;
		file: null | File;
	};
	data: LoggedInUserQuery;
}

const NotificationsForm: React.FC<NotificationsFormProps> = ({
	registerFormDetails,
	data,
}) => {
	const { data: loggedInUser } = useLoggedInUserQuery();
	const [finishRegistration] = useFinishRegistrationMutation();
	const [getUrl] = useCreateFileUploadUrlLazyQuery();
	const apolloClient = useApolloClient();

	if (!loggedInUser?.user) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="mb-14">
				<h1 className="mb-3 text-5xl font-bold">Tell us more about you</h1>
				<p className="text-gray-accent">
					You can always change these later in your settings.
				</p>
			</div>
			<div>
				<Formik
					onSubmit={() => {
						// do nothing
					}}
					initialValues={{
						darkMode: true,
						subscribedEvents: true,
						notifications: true,
						termsAndConditions: false,
						roundup: true,
					}}
				>
					{({ values, setValues }) => {
						return (
							<Form data-testid="notifications-form">
								<div>
									<div className="mb-3">
										<Switch
											checked={values.darkMode}
											onChange={() => {
												setValues({
													...values,
													darkMode: !values.darkMode,
												});
											}}
											label="Dark Mode"
											labelPlacement="right"
											color="teal"
										/>
									</div>

									<div className="mb-3">
										<Switch
											checked={values.roundup}
											onChange={() => {
												setValues({
													...values,
													roundup: !values.roundup,
												});
											}}
											label="Daily Roundup emails"
											labelPlacement="right"
											color="blue"
										/>
									</div>

									<div className="mb-3">
										<Switch
											checked={values.notifications}
											onChange={() => {
												setValues({
													...values,
													subscribedEvents: !values.notifications,
												});
											}}
											label="Notifications"
											labelPlacement="right"
											color="red"
										/>
									</div>

									<div className="mt-10">
										<input
											checked={values.termsAndConditions}
											onChange={() => {
												setValues({
													...values,
													termsAndConditions: !values.termsAndConditions,
												});
											}}
											type="checkbox"
											className="mr-2"
										/>
										<span className="text-xs">
											I have read and agree to the{' '}
											<Link href="/register" color="blue">
												Terms of Service
											</Link>
											, the
											<Link href="/register" color="blue">
												{' '}
												Privacy Policy{' '}
											</Link>
											and the{' '}
											<Link href="/register" color="blue">
												Cookie Policy
											</Link>
										</span>
									</div>

									{values.termsAndConditions && (
										<div className="mt-10">
											<Button
												type="submit"
												onClick={async () => {
													const filename = slugify(
														`${registerFormDetails.email.split('@')[0]}.jpg`
													);

													if (registerFormDetails.file?.name) {
														const fileName = await getUrl({
															variables: {
																filenames: [filename],
															},
														});

														if (fileName.data?.url) {
															await fetch(fileName.data.url[0], {
																method: 'PUT',
																headers: {
																	'Content-Type': 'multipart/form-data',
																},
																body: registerFormDetails.file,
															});

															const userData = {
																email: registerFormDetails.email,
																name: registerFormDetails.name,
																discord: registerFormDetails.discord,
																phone: registerFormDetails.phone,
																batch: registerFormDetails.batch,
																bio: registerFormDetails.bio,
																preferences: {
																	darkmode: values.darkMode,
																	notifications: values.notifications,
																	roundup: values.roundup,
																},
																profilePicture: `${process.env.NEXT_PUBLIC_IMG_URL}/${filename}`,
															};

															if (data?.user) {
																const data = await finishRegistration({
																	variables: {
																		userData,
																	},
																});

																if (data.errors) {
																	alert(
																		'Something went wrong. Please try again.'
																	);
																	return;
																}

																if (data.data?.finishRegistration) {
																	apolloClient.writeQuery({
																		query: LoggedInUserDocument,
																		data: {
																			user: {
																				...loggedInUser.user,
																				batch: registerFormDetails.batch,
																				bio: registerFormDetails.bio,
																				profilePicture: `${process.env.NEXT_PUBLIC_IMG_URL}/${filename}`,
																			},
																		},
																	});
																}
															}
														}
													}
												}}
											>
												Finish Registration
											</Button>
										</div>
									)}
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</>
	);
};

export default NotificationsForm;