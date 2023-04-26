import { useRouter } from 'next/router';
import React from 'react';
import {
	LoggedInUserDocument,
	useGoogleAuthUrlQuery,
	useGoogleLoginLazyQuery,
} from '@/graphql/generated';
import { apolloClient } from '@/lib/withApollo';

const useGoogleAuth = (redirectURL = '/feed') => {
	const router = useRouter();
	const { data: authURLData, loading: authURLLoading } =
		useGoogleAuthUrlQuery();
	const [loginWithGoogle, { data: loginData, loading: loginLoading }] =
		useGoogleLoginLazyQuery();

	React.useEffect(() => {
		if (loginData?.user) {
			apolloClient.writeQuery({
				query: LoggedInUserDocument,
				data: { user: loginData.user, __typename: loginData.__typename },
			});

			if (loginData?.user?.bio) {
				router.replace(redirectURL);
			} else {
				router.replace('/register');
			}
		}
	}, [loginData]);

	const onCode = async (code: string, keepMeSignedIn: boolean) => {
		console.log(code, keepMeSignedIn);
		await loginWithGoogle({
			variables: { input: { code, keepMeSignedIn } },
		});
	};

	return {
		loading: loginLoading,
		authURLLoading,
		url: authURLData?.url || '',
		onCode,
	};
};

export default useGoogleAuth;
