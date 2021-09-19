/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
        @example
          cy.getByTestId('data-testid-attr').should('be.visible')
          cy.getByTestId('data-testid-attr').should('contains', 'Hello World')
        */
    getByTestId(dataTestIdAttribute: string, args?: any): Chainable<Element>;

    gqlRequest(operationName: string, fixture: string): Chainable<Element>;
  }
}
