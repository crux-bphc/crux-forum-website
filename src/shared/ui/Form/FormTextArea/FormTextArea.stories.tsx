import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withFormik } from '@bbbtech/storybook-formik';
import * as Yup from 'yup';

import FormTextArea from './FormTextArea';

const Component: ComponentMeta<typeof FormTextArea> = {
	decorators: [withFormik],
	title: 'UI/Form/FormTextArea',
	component: FormTextArea,
	argTypes: {},
};

const Template: ComponentStory<typeof FormTextArea> = (args) => (
	<FormTextArea {...args} />
);

export const Default = Template.bind({});

Default.args = {
	label: 'Bio',
	name: 'bio',
	id: 'bio',
	required: true,
	placeholder: '',
};

Default.parameters = {
	formik: {
		initialValues: {
			bio: '',
		},
		validationSchema: Yup.object().shape({
			bio: Yup.string().required('This is a required field').trim(),
		}),
	},
};

export default Component;
