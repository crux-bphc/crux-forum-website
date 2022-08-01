import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withFormik } from '@bbbtech/storybook-formik';
import * as Yup from 'yup';

import FormInput from './FormInput';

const Component: ComponentMeta<typeof FormInput> = {
	decorators: [withFormik],
	title: 'UI/Form/FormInput',
	component: FormInput,
	argTypes: {},
};

const Template: ComponentStory<typeof FormInput> = (args) => (
	<FormInput {...args} />
);

export const Text = Template.bind({});

Text.args = {
	label: 'Name',
	name: 'myname',
	id: 'myname',
	required: true,
	placeholder: '',
	type: 'text',
};

Text.parameters = {
	formik: {
		initialValues: {
			myname: '',
		},
		validationSchema: Yup.object().shape({
			myname: Yup.string().required('User must provide this info').trim(),
		}),
	},
};

export const Email = Template.bind({});

Email.args = {
	label: 'Email Address',
	name: 'email',
	id: 'email',
	required: true,
	placeholder: 'someone@email.com',
	type: 'email',
};

Email.parameters = {
	formik: {
		initialValues: {
			email: '',
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.required('User must provide their email')
				.email('Please provide a valid email')
				.trim(),
		}),
	},
};

export default Component;
