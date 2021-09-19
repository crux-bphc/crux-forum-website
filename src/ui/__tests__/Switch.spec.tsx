import React from 'react';
import { mount, unmount } from '@cypress/react';
import Switch from '../Switch';

describe('UI/Button', () => {
  it('switch ui rendered correctly when not active', () => {
    mount(
      <Switch
        active={false}
        toggleActive={() => {}}
        onChange={() => {}}
        variant='purple'
      />
    );
    cy.getByTestId('switch').should('have.class', 'bg-gray-accent');
    cy.getByTestId('switch-thumb').should('have.class', 'translate-x-0');
  });

  it('switch ui rendered correctly when active', () => {
    mount(
      <Switch
        active={true}
        toggleActive={() => {}}
        onChange={() => {}}
        variant='purple'
      />
    );
    cy.getByTestId('switch').should('not.have.class', 'bg-gray-accent');
    cy.getByTestId('switch-thumb').should('not.have.class', 'translate-x-0');
  });

  afterEach(() => {
    unmount();
  });
});
