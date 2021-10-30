import React from 'react';
import { mount, unmount } from '@cypress/react';
import UserInfo from '../UserInfo';

const testId = 'user-info';

const userDataWithProfilePic = {
	__typename: 'UserType',
	_id: '61508038f739c2159cf30f4f',
	batch: 2019,
	bio: 'Ut aut eos repellat reiciendis eius est.',
	discord: 'Kaya64',
	email: 'test@hyderabad.bits-pilani.ac.in',
	name: 'Marta Olson',
	profilePicture: 'https://cdn.fakercloud.com/avatars/wake_gs_128.jpg',
};

const userDataWithoutProfilePic = userDataWithProfilePic;
userDataWithoutProfilePic.profilePicture = '';

describe('Test UserInfo', () => {
	it('renders user info with profile picture', () => {
		mount(<UserInfo user={userDataWithProfilePic} />);
		cy.getByTestId(testId)
			.should('exist')
			.within(() => {
				cy.get('img').should('exist');
			});
	});

	it('renders user info without profile picture', () => {
		mount(<UserInfo user={userDataWithoutProfilePic} />);
		cy.getByTestId(testId).should('exist');
	});

	afterEach(() => {
		unmount();
	});
});

describe('Test PostGallery', () => {
	it('does nothing', () => {});
});
