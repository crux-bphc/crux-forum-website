import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormLabel from './FormLabel';

const Component: ComponentMeta<typeof FormLabel> = {
	title: 'UI/Form/FormLabel',
	component: FormLabel,
	argTypes: {},
};

const Template: ComponentStory<typeof FormLabel> = (args) => (
	<FormLabel {...args} />
);

export const Default = Template.bind({});

Default.args = {
	label: 'Label',
	required: true,
};

export default Component;
