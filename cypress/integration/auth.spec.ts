describe('google auth url', () => {
	beforeEach(() => {
		cy.intercept('POST', 'http://localhost:3000/api/graphql', (req) => {
			const { body } = req;
			console.log(body);

			if (
				body.hasOwnProperty('operationName') &&
				body.operationName === 'GoogleAuthUrl'
			) {
				req.alias = body.operationName;

				req.reply({ fixture: 'auth/authUrl.json' });
			}
		});
		cy.visit('/');
	});

	it('get google auth url', () => {
		cy.wait('@GoogleAuthUrl')
			.its('response.body.data.GoogleAuthUrl')
			.should('equal', 'google-auth-url');
	});
});

describe('user info', () => {
	it('user should be undefined', () => {
		cy.gqlRequest('GetUser', 'user/user-null.json');
		cy.visit('/');

		cy.wait('@GetUser').its('response.body.data.getUser').should('be.null');
	});

	it('user should be defined', () => {
		cy.gqlRequest('GetUser', 'user/user.json');
		cy.visit('/');

		cy.wait('@GetUser')
			.its('response.body.data.getUser')
			.should('include.all.keys', '_id', 'name', 'email');

		cy.location().then((loc) => {
			loc.pathname = '/feed';
		});
	});
});
