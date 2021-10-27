import React from 'react';
import { mount, unmount } from '@cypress/react';
import Switch from '../Switch';

describe('UI / Switch', () => {
	it('switch ui rendered correctly when not active', () => {
		mount(
			<Switch
				active={false}
				onChange={() => {}}
				variantChecked="purple"
				variantUnchecked="gray"
				id="switch"
			/>
		);
		cy.getByTestId('switch').should('have.class', 'bg-gray-900');
		cy.getByTestId('switch-thumb').should('have.class', 'left-[2px]');
	});

	it('switch ui rendered correctly when active', () => {
		mount(<Switch id="notifs" active={true} onChange={() => {}} size="sm" />);
		cy.getByTestId('switch').should('not.have.class', 'bg-gray-900');
		cy.getByTestId('switch-thumb').should('not.have.class', 'left-[2px]');
	});

	it('left label is rendered correctly', () => {
		const component = mount(
			<Switch
				id="notifs"
				active={true}
				onChange={() => {}}
				size="sm"
				left={<p data-testid="left">Left Side</p>}
			/>
		);

		component.getByTestId('left').should('exist');
		component.getByTestId('switch').should('have.class', 'ml-3');
	});

	it('right label is rendered correctly', () => {
		const component = mount(
			<Switch
				id="notifs"
				active={true}
				onChange={() => {}}
				size="sm"
				right={<p data-testid="right">right Side</p>}
			/>
		);

		component.getByTestId('right').should('exist');
		component.getByTestId('switch').should('have.class', 'mr-3');
	});

	it('toggle functionality works correctly', () => {
		const onChange = cy.stub().as('switchToggle');
		const component = mount(
			<Switch
				id="notifs"
				active={true}
				onChange={() => onChange}
				variantChecked="cyan"
				size="sm"
			/>
		);

		const switchInput = component.getByTestId('switch-input');
		switchInput.trigger('change', { force: true });
	});

	afterEach(() => {
		unmount();
	});
});
