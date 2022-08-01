import { useLoggedInUserQuery } from '@/graphql/generated';
import { NetworkStatus } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';

const useRedirect = () => {
	const router = useRouter();
	const { loading, data, networkStatus, error } = useLoggedInUserQuery({
		ssr: false,
	});

	React.useEffect(() => {
		if (!loading || networkStatus === NetworkStatus.ready) {
			// if (router.pathname !== '/' && !data?.user) {
			// 	router.replace('/');
			// }
			// if (
			// 	router.pathname !== '/register' &&
			// 	data?.user &&
			// 	!data.user.profilePicture &&
			// 	!data.user.bio
			// ) {
			// 	router.replace('/register');
			// }
			// if (router.pathname === '/' || router.pathname === '/register') {
			// 	if (data?.user && data.user.profilePicture && data.user.bio) {
			// 		router.replace('/feed');
			// 	}
			// }
		}
	}, [loading, networkStatus, router, data?.user]);

	return {
		loading,
		data,
		networkStatus,
		error,
	};
};

export default useRedirect;
