import { mount, unmount } from '@cypress/react';
import React from 'react';
import TopicsModal from '../TopicsModal';

const DUMMY_DATA: any = [
	{
		_id: '614c8f08fe60d017770f5ed9',
		name: 'Avamm',
	},
	{
		_id: '614c8f08fe60d017770f5eda',
		name: 'Blogtags',
	},
];

describe('Topics Modal Works', () => {
	it('Add or remove functionality works', () => {
		const component = mount(
			<TopicsModal
				tags={DUMMY_DATA}
				selectedTags={[]}
				onListItemClick={() => cy.stub()}
				isOpen={true}
				onClose={() => {}}
			/>
		);

		const iconButton = component.getByTestId('modal-icon-btn-0');
		iconButton.trigger('click', { force: true });
	});

	it('show x-circle icon if tag is selected or plus-circle icon if not selected', () => {
		const component = mount(
			<TopicsModal
				tags={DUMMY_DATA}
				selectedTags={[
					{
						_id: '614c8f08fe60d017770f5eda',
						name: 'Blogtags',
						about: '',
						color: '',
						image: '',
						subscribedToTopic: true,
					},
				]}
				isOpen={true}
				onClose={() => {}}
				onListItemClick={() => {}}
			/>
		);

		component.getByTestId('xcircle-icon-btn-1').should('exist');
		component.getByTestId('pluscircle-icon-btn-0').should('exist');
	});

	afterEach(() => {
		unmount();
	});
});
