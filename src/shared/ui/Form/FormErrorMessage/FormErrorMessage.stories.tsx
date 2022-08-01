import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormErrorMessage from './FormErrorMessage';

const Component: ComponentMeta<typeof FormErrorMessage> = {
	title: 'UI/Form/FormErrorMessage',
	component: FormErrorMessage,
	argTypes: {},
};

const Template: ComponentStory<typeof FormErrorMessage> = (args) => (
	<FormErrorMessage {...args} />
);

export const Default = Template.bind({});

Default.args = {
	error: 'This is an error message',
};

export default Component;
