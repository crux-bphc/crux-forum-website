import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByTestId', (testId: string, ...args) => {
	return cy.get(`[data-testid=${testId}]`, ...args);
});

Cypress.Commands.add('gqlRequest', (operationName: string, fixture: string) => {
	cy.intercept('POST', 'http://localhost:3000/api/graphql', (req) => {
		const { body } = req;
		console.log(body);

		if (
			body.hasOwnProperty('operationName') &&
			body.operationName === operationName
		) {
			req.alias = body.operationName;

			req.reply({ fixture });
		}
	});
});
