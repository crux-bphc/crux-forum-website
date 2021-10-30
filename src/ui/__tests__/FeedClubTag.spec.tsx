import React from 'react';
import { mount, unmount } from '@cypress/react';
import classes from './../styles/FeedClubTag.module.css';
import FeedClubTag from '../FeedClubTag';

describe('UI/FeedClubTag', () => {
	it('renders correctly and is clickable', () => {
		mount(<FeedClubTag name="Crux" />);
		cy.getByTestId('feed-club-tag').should('have.class', classes.feedClubTag);
		cy.getByTestId('feed-club-tag').click();
	});

	it('checks if onClick function works', () => {
		mount(<FeedClubTag name="Crux" onClick={() => alert('test content')} />);
		cy.getByTestId('feed-club-tag').click();
		cy.on('window:alert', (str) => {
			expect(str).to.equal('test content');
		});
	});

	afterEach(() => {
		unmount();
	});
});
