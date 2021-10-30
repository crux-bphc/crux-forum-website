describe('test google auth', () => {
	beforeEach(() => {
		cy.gqlRequest('GoogleAuthUrl', 'auth/authUrl.json');
		cy.visit('/');

		cy.wait('@GoogleAuthUrl')
			.its('response.body.data.GoogleAuthUrl')
			.should('exist');
	});

	it('login mutation called if code exists url query params', () => {
		cy.visit('/?code=authCode');

		cy.gqlRequest('GoogleLogin', 'auth/login.json');
		cy.wait('@GoogleLogin');
	});
});

describe('test user info', () => {
	it('user should be undefined if not logged in', () => {
		cy.gqlRequest('GetUser', 'user/user-null.json');
		cy.visit('/');

		cy.wait('@GetUser').its('response.body.data.getUser').should('be.null');
	});

	it('user should be defined if logged in', () => {
		cy.gqlRequest('GetUser', 'user/user.json');
		cy.visit('/');

		cy.wait('@GetUser')
			.its('response.body.data.getUser')
			.should('include.all.keys', '_id', 'name', 'email');

		cy.visit('/feed');

		cy.location().should((loc) => {
			expect(loc.pathname).to.eq('/feed');
		});
	});
});
