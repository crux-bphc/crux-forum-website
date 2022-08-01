/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import '@testing-library/cypress/add-commands';
import 'cypress-file-upload';

Cypress.Commands.add('getByTestId', (testId: string, ...args) => {
	cy.get(`[data-testid=${testId}]`, ...args);
});

Cypress.Commands.add('gqlRequest', (operationName: string, fixture: string) => {
	const URL = 'http://localhost:3000/api/test/graphql';

	cy.intercept('POST', URL, (req) => {
		const body = req.body;

		if (body?.operationName === operationName) {
			req.alias = body.operationName;

			req.reply({ fixture });
		}
	});
});

Cypress.Commands.add(
	'login',
	(userType: 'null' | 'temp' | 'registered' = 'registered') => {
		if (userType === 'registered') {
			cy.gqlRequest('LoggedInUser', 'auth/user-registered.json');

			cy.wait('@LoggedInUser')
				.its('response.body.data.user')
				.should('not.equal', null);
		}

		if (userType === 'temp') {
			cy.gqlRequest('LoggedInUser', 'auth/user-temp.json');
			cy.wait('@LoggedInUser')
				.its('response.body.data.user')
				.should('not.equal', null);
		}

		if (userType === 'null') {
			cy.gqlRequest('LoggedInUser', 'auth/user-null.json');
			cy.wait('@LoggedInUser')
				.its('response.body.data.user')
				.should('equal', null);
		}
	}
);
