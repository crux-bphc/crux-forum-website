describe('When user is not logged in', () => {
	beforeEach(() => {
		cy.clearCookies();
		cy.visit('/register');
		cy.login('null');
	});

	it('Test that user is redirected to home page if not logged in', () => {
		cy.url().should('not.include', '/register');
	});
});

describe('When user is logged in', () => {
	beforeEach(() => {
		cy.clearCookies();
		cy.visit('/register');
	});

	it('Test that user is redirected to feed page if already registered', () => {
		cy.login('registered');

		cy.url().should('include', '/feed');
		cy.url().should('not.include', '/register');
	});

	it('Test that user is on register page if not registered', () => {
		cy.login('temp');

		cy.url().should('include', '/register');
	});
});

describe('Registration Workflow', () => {
	beforeEach(() => {
		cy.clearCookies();
		cy.visit('/register');
		cy.login('temp');
	});

	it('Test that formik registration form exists', () => {
		cy.getByTestId('registration-form').should('exist');
	});

	it('Test that email and name fields are prefilled and disabled', () => {
		const email = cy.get('input[id=email]');
		email.should('have.value', 'profile@email.com');
		email.should('be.disabled');

		const name = cy.get('input[id=name]');
		name.should('have.value', 'John Doe');
		name.should('be.disabled');
	});

	it("Test that form submission doesn't work if form is empty", () => {
		cy.getByTestId('registration-form').submit();

		cy.get('[role="alert"]').should('be.visible');
	});

	it("Test that form submission doesn't work if form is invalid", () => {
		const discord = cy.get('input[id=discord]');
		discord.type('johndoe#121');

		const phoneNumber = cy.get('input[id=phoneNumber]');
		phoneNumber.type('123456789');

		cy.get('input[id=photo]').attachFile('auth/user-null.json', {
			force: true,
			allowEmpty: false,
			subjectType: 'drag-n-drop',
		});

		cy.getByTestId('registration-form').submit();
	});

	it('Test that form submission works if form is valid and redirects to feed page', () => {
		cy.gqlRequest('FinishRegistration', 'register/finish-registration.json');

		const email = cy.get('input[id=email]');
		email.should('have.value', 'profile@email.com');
		email.should('be.disabled');

		const name = cy.get('input[id=name]');
		name.should('have.value', 'John Doe');
		name.should('be.disabled');

		const bio = cy.get('textarea[id=bio]');
		bio.type('This is a bio');

		const discord = cy.get('input[id=discord]');
		discord.type('johndoe#1212');

		const phoneNumber = cy.get('input[id=phoneNumber]');
		phoneNumber.type('1234567891');

		cy.get('input[id=photo]').attachFile('register/parrot.jpg');

		cy.get('button[type=submit]').click();

		cy.get('input[type=checkbox]').check();

		cy.get('button[type=submit]').click();
		cy.wait('@FinishRegistration');

		cy.url().should('include', '/feed');
	});
});
