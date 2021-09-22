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
		mount(
			<Switch
				id="notifs"
				active={true}
				onChange={() => {}}
				variantChecked="cyan"
				size="sm"
				right={<p className="text-white font-bold text-lg">Notifications</p>}
			/>
		);
		cy.getByTestId('switch').should('not.have.class', 'bg-gray-900');
		cy.getByTestId('switch-thumb').should('not.have.class', 'left-[2px]');
	});

	afterEach(() => {
		unmount();
	});
});
