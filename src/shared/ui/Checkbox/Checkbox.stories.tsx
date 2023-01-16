import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

const Component: ComponentMeta<typeof Checkbox> = {
	title: 'UI/Checkbox',
	component: Checkbox,
};

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export default Component;
