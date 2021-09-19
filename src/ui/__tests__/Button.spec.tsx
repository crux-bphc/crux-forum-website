import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/outline';
import { mount, unmount } from '@cypress/react';
import Button from '../Button';
import classes from '../styles/Button.module.css';

describe('UI/Button', () => {
  it('is clickable when not disabled', () => {
    mount(<Button />);
    cy.getByTestId('btn').should('not.have.class', classes.disabled);
    cy.getByTestId('btn').click();
  });

  it('is not clickable when disabled', () => {
    mount(<Button disabled />);
    cy.getByTestId('btn').should('have.class', classes.disabled);
    cy.getByTestId('btn').should('be.disabled');
  });

  it('shows an icon if icon prop is passed down', () => {
    mount(<Button icon={<AcademicCapIcon />} />);
    cy.getByTestId('btn-icon').should('exist');
  });

  it('shows a loading indicator if loading state is true', () => {
    mount(<Button isLoading={true} />);
    cy.getByTestId('btn-loading').should('exist');
  });

  afterEach(() => {
    unmount();
  });
});
