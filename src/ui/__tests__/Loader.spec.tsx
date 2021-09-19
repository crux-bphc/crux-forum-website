import React from 'react';
import { mount } from '@cypress/react';
import Loader from '../Loader';

describe('UI/Loader', () => {
  it('renders loading spinner correctly', () => {
    mount(<Loader />);
    cy.getByTestId('loader').should('exist');
    cy.getByTestId('loader-fullscreen').should('not.exist');
  });

  it('renders loading spinner (fullscreen) correctly', () => {
    mount(<Loader variant='fullScreen' />);
    cy.getByTestId('loader').should('exist');
    cy.getByTestId('loader-fullscreen').should('exist');
  });
});
