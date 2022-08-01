import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileImg from '../../../../public/profile.svg';

import Avatar from './Avatar';

const Component: ComponentMeta<typeof Avatar> = {
	title: 'UI/Avatar',
	component: Avatar,
	argTypes: {},
};

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
	unoptimized: false,
	src: ProfileImg,
};

export default Component;
