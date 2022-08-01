import { withApollo as withNextApollo } from 'next-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
	cache: new InMemoryCache(),
	credentials: 'include',
});

export const withApollo = withNextApollo(apolloClient);
