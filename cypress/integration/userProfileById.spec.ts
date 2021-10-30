describe('profile page by id', () => {
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
		cy.gqlRequest('GetSingleUser', 'user/userProfileById.json');

		cy.visit('/profile/users/614df6327bf3662d018c3d6e');

		cy.wait('@GetSingleUser')
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

	it('check if subscribed topics of logged in user is valid', () => {
		cy.gqlRequest('GetUserSubscribedTopics', 'user/userSubscribedTopics.json');

		cy.visit('/profile/users/614df6327bf3662d018c3d6e');

		cy.wait('@GetUserSubscribedTopics')
			.its('response.body.data.getUser')
			.should('include.all.keys', 'subscriptions');
	});

	// it('check if clicking on club tag redirects to club page', () => {
	// 	cy.getByTestId('feed-club-tag').first().click();

	// 	cy.location().then((loc) => {
	// 		expect(loc.pathname).to.eq('/profile/crux');
	// 	});
	// });
});
