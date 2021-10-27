import { mount, MountReturn, unmount } from '@cypress/react';
import React from 'react';
import ScrollBarContainer from '../ScrollBar';

describe('UI Scrollbar', () => {
	let component: Cypress.Chainable<MountReturn>;

	beforeEach(() => {
		component = mount(
			<ScrollBarContainer containerClass="" className="">
				<p>Scroll List</p>
			</ScrollBarContainer>
		);
	});

	it('on mouseover should be visible (opacity to 1)', () => {
		component
			.getByTestId('scrollbar')
			.trigger('mouseover')
			.should('have.css', 'opacity')
			.and('eq', '1');
	});

	it('on mouseout should be invisible (opacity to 0)', () => {
		component
			.getByTestId('scrollbar')
			.trigger('mouseout')
			.should('have.css', 'opacity')
			.and('eq', '0');
	});

	it('scroll bar works correctly', () => {
		component.getByTestId('scrollhost').trigger('scroll');
		component.getByTestId('scrollhost').trigger('mousedown');
		component.getByTestId('scrollhost').trigger('mouseup');

		component.getByTestId('scrollhost').trigger('mouseleave');
		component.getByTestId('scrollhost').trigger('mousedown');
		component.getByTestId('scrollhost').trigger('mousemove');
	});

	afterEach(() => {
		unmount();
	});
});
