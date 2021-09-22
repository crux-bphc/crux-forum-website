/* eslint-disable */

import { NextApiResponse, NextApiRequest } from 'next';
import { ApolloServer } from 'apollo-server-micro';
// @ts-ignore
import typeDefs from './../../../graphql/schema.graphql';

const apolloServer = new ApolloServer({
	typeDefs,
	mocks: true,
});

const startServer = apolloServer.start();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await startServer;
	await apolloServer.createHandler({
		path: '/api/graphql',
	})(req, res);
}

export const config = {
	api: {
		bodyParser: false,
	},
};
