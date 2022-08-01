import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from './Link';

const Component: ComponentMeta<typeof Link> = {
	title: 'UI/Link',
	component: Link,
	argTypes: {
		className: {
			control: false,
		},
		color: {
			defaultValue: 'teal',
		},
	},
};

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'http://google.com',
	href: 'http://google.com',
};

export default Component;
