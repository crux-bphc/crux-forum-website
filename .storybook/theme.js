import { create } from '@storybook/theming';

export const theme = create({
	base: 'dark',

	colorPrimary: '#43fbef',
	colorSecondary: '#66b1fc',

	textColor: '#fff',
	textInverseColor: '#222',

	fontBase: '"Inter", sans-serif',

	barTextColor: '#c5c6c7',
	barSelectedColor: '#fff',
	barBg: '#293443',

	appBg: '#1f2833',
	appContentBg: '#1f2833',
	appBorderColor: '#c5c6c7',
	appBorderRadius: 4,

	inputBg: '#293443',
	inputBorder: '#c5c6c7',
	inputTextColor: '#f3f4f6',
	inputBorderRadius: 4,

	brandTitle: 'cruX Forum',
});
