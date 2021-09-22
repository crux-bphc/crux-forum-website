import React from 'react';
import { mount, unmount } from '@cypress/react';
import Avatar from '../Avatar';

describe('UI/Avatar', () => {
	it('default (size md) renders correctly', () => {
		mount(<Avatar />);

		cy.getByTestId('avatar').should('have.id', 'avatar-md');
	});

	afterEach(() => {
		unmount();
	});
});
