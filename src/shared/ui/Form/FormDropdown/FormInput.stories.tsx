import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withFormik } from '@bbbtech/storybook-formik';

import FormDropdown from './FormDropdown';

const Component: ComponentMeta<typeof FormDropdown> = {
	decorators: [withFormik],
	title: 'UI/Form/FormDropdown',
	component: FormDropdown,
	argTypes: {},
};

const Template: ComponentStory<typeof FormDropdown> = (args) => (
	<FormDropdown {...args} />
);

export const Dropdown = Template.bind({});

Dropdown.args = {
	required: true,
	id: 'category',
	options: [
		{
			label: 'Akai Haato',
			value: 'haachama',
		},
		{
			label: 'Ceres Fauna',
			value: 'fauna',
		},
		{
			label: 'Ouro Kronii',
			value: 'kronii',
		},
		{
			label: 'Amelia Watson',
			value: 'ame',
		},
	],
	value: 'haachama',
	disabled: false,
};

export default Component;
