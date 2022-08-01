import { NextApiResponse, NextApiRequest } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import {
	ApolloServerPluginLandingPageGraphQLPlayground,
	ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';

// @ts-ignore
import typeDefs from '@/graphql/generated/schema.graphql';

const apolloServer = new ApolloServer({
	typeDefs,
	mockEntireSchema: false,
	mocks: {
		String: () => 'http://localhost:3000/profile.svg',
	},
	introspection: true,
	plugins: [
		process.env.NODE_ENV === 'production'
			? ApolloServerPluginLandingPageDisabled()
			: ApolloServerPluginLandingPageGraphQLPlayground(),
	],
	persistedQueries: false,
});

const startServer = apolloServer.start();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await startServer;
	await apolloServer.createHandler({
		path: '/api/test/graphql',
	})(req, res);
}

export const config = {
	api: {
		bodyParser: false,
	},
};
