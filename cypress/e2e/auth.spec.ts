describe('Login', () => {
	beforeEach(() => {
		cy.clearCookies();
		cy.visit('/');
	});

	it('Test that Google auth URL is present', () => {
		cy.visit('/');
		cy.gqlRequest('GoogleAuthURL', 'auth/google-auth-url.json');
		cy.wait('@GoogleAuthURL');
	});

	it('Test that registered users on login are redirected to feed page', () => {
		cy.login('registered');
		cy.url().should('include', '/feed');
	});

	it('Test that temp users on login are redirected to registration page', () => {
		cy.login('temp');
		cy.url().should('include', '/register');
	});
});

describe('Logout', () => {
	beforeEach(() => {
		cy.clearCookies();
		cy.visit('/');
		cy.login('registered');
	});

	it('Test that logout works', () => {
		cy.gqlRequest('LogoutUser', 'auth/logout.json');
		cy.gqlRequest('LoggedInUser', 'auth/user-null.json');

		cy.getByTestId('appnavbar-menu-button').click();
		cy.getByTestId('appnavbar-menu-logout').click();

		cy.wait('@LogoutUser').its('response.body.data.logout').should('be.true');
		cy.wait('@LoggedInUser');

		cy.url().should('not.include', '/feed');
	});
});
