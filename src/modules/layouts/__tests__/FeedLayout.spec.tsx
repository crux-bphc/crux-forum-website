import React from 'react';
import { mount, unmount } from '@cypress/react';
import FeedLayout from '../FeedLayout';

describe('Test Feed Layout', () => {
	before(() => {
		mount(<FeedLayout />);
	});

	it('scroll property is set to auto on mount', () => {
		expect(
			document.documentElement.style.getPropertyValue('--scroll-width')
		).eq('none');
	});

	it('scroll property is set to none on unmount', () => {
		unmount();
		expect(
			document.documentElement.style.getPropertyValue('--scroll-width')
		).eq('auto');
	});
});
