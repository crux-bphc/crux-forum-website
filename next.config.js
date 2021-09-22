module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['picsum.photos'],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.module.rules.push({
				test: /\.(graphql|gql)$/,
				loader: '@graphql-tools/webpack-loader',
			});
		}

		return config;
	},
};
