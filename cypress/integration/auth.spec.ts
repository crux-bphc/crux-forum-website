describe('test google auth url', () => {
	it('get google auth url', () => {
		cy.gqlRequest('GoogleAuthUrl', 'auth/authUrl.json');
		cy.visit('/');

		cy.wait('@GoogleAuthUrl')
			.its('response.body.data.GoogleAuthUrl')
			.should('equal', 'google-auth-url');
	});
});

describe('test user info', () => {
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
