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
	});

	it('test that theme is light if theme saved in localStorage is light', () => {
		cy.reload();

		expect(localStorage.getItem('theme')).to.be.eq('light');
	});
});
