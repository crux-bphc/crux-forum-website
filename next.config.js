/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.module.rules.push({
				test: /\.(graphql|gql)$/,
				loader: '@graphql-tools/webpack-loader',
			});
		}

		return config;
	},
	images: {
		domains: ['d23hwxa527zkay.cloudfront.net', 'localhost', 'picsum.photos'],
	},
};

module.exports = nextConfig;
