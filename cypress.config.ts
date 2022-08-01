import { defineConfig } from 'cypress';
// @ts-ignore
// import coverageTask from '@cypress/code-coverage/task';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		specPattern: './**/*.spec.ts',
		taskTimeout: 30000,
		video: false,
		pageLoadTimeout: 30000,
		execTimeout: 30000,
		fileServerFolder: 'public',
		requestTimeout: 30000,
	},
	component: {
		devServer: {
			framework: 'next',
			bundler: 'webpack',
		},
	},
});
