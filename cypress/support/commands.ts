import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByTestId', (testId: string, ...args) => {
  return cy.get(`[data-testid=${testId}]`, ...args);
});
