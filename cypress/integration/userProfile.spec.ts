describe('user profile page', () => {
	beforeEach(() => {
		cy.gqlRequest('GetUser', 'user/user.json');
		cy.visit('/');

		cy.wait('@GetUser')
			.its('response.body.data.getUser')
			.should('include.all.keys', '_id', 'name', 'email');

		cy.location().then((loc) => {
			loc.pathname = '/profile/users/me';
		});
	});

	it('check if data of user is valid', () => {
		cy.gqlRequest('GetUserProfile', 'user/userProfile.json');

		cy.visit('/profile/users/me');

		cy.wait('@GetUserProfile')
			.its('response.body.data.getUser')
			.should(
				'include.all.keys',
				'_id',
				'name',
				'email',
				'discord',
				'bio',
				'batch',
				'profilePicture',
				'subscribedEvents',
				'posted',
				'subscriptions'
			);
	});
});
