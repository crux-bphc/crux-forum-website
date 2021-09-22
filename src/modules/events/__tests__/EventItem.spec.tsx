import React from 'react';
import { mount, unmount } from '@cypress/react';
import EventItem from '../EventItem';

describe('Test Event Item', () => {
	it('default ui rendered correctly', () => {
		mount(<EventItem />);
		cy.getByTestId('event-item').should('have.class', 'mb-5');
	});

	it('margin bottom not applied if bottomBorder props is set to false', () => {
		mount(<EventItem bottomBorder={false} />);
		cy.getByTestId('event-item').should('not.have.class', 'mb-5');
	});

	afterEach(() => {
		unmount();
	});
});
