import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from './TextArea';

const Component: ComponentMeta<typeof TextArea> = {
	title: 'UI/TextArea',
	component: TextArea,
};

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.args = {};

export default Component;
