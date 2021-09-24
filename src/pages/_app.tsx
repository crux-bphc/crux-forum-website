import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../../lib/withApollo';
import '../styles/globals.css';
import ThemeContextProvider from '../modules/theme/ThemeContextProvider';
import Layout from '../modules/layouts/Layout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ApolloProvider client={apolloClient}>
			<Layout>
				<ThemeContextProvider>
					<Component {...pageProps} />
				</ThemeContextProvider>
			</Layout>
		</ApolloProvider>
	);
};

export default App;
