import React from 'react';
import { mount } from '@cypress/react';
import PostGallery from '../PostGallery';
import classes from './../styles/PostGallery.module.css';

const testId = 'post-gallery';

describe('Test PostGallery', () => {
	it('renders 1-col layout if 1 image exists', () => {
		mount(<PostGallery images={['/1']} />);
		cy.getByTestId(testId).should('exist').and('have.class', classes.oneImage);
	});

	it('renders 2-col layout if 2 image exists', () => {
		mount(<PostGallery images={['/1', '/2']} />);
		cy.getByTestId(testId).should('exist').and('have.class', classes.twoImages);
	});

	it('renders 2-row 2-col layout if 3 images or more exist', () => {
		mount(<PostGallery images={['/1', '/2', '/4']} />);
		cy.getByTestId(testId)
			.should('exist')
			.and('have.class', classes.threeImages);
	});
});
