describe('Test default theme (dark theme)', () => {
	beforeEach(() => {
		cy.visit('/');
		document.body.classList.remove('dark');
		document.body.classList.remove('light');

		cy.reload();
	});

	it('test that the default theme is dark', () => {
		expect(localStorage.getItem('theme')).to.be.eq('dark');
	});
});

describe('Test light mode', () => {
	beforeEach(() => {
		cy.visit('/');
		localStorage.setItem('theme', 'light');

		cy.reload();
	});

	it('test that theme is light if theme saved in localStorage is light', () => {
		expect(localStorage.getItem('theme')).to.be.eq('light');
	});
});
