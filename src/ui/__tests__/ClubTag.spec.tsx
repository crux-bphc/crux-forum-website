import { mount } from '@cypress/react';
import React from 'react';
import ClubTag from '../ClubTag';

describe('Test Club Tag', () => {
	it('test club tag without on click function', () => {
		mount(<ClubTag name="cRuX" onClick={undefined} />);
		cy.getByTestId('club-tag').should('exist');
	});

	it('test club tag with on click function', () => {
		cy.on('window:alert', (str) => {
			expect(str).to.equal(`club tag clicked`);
		});

		mount(<ClubTag name="cRuX" onClick={() => alert('club tag clicked')} />);
		cy.getByTestId('club-tag').should('exist').click();
	});
});
