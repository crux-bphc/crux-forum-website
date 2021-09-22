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

	afterEach(() => {
		unmount();
	});
});
