import React from 'react';
import SignUpLayout from '../modules/layouts/SignUpLayout';
import Button from '../ui/Button';
import GoogleIcon from '../ui/icons/GoogleIcon';
import Link from 'next/link';
import {
	useGetUserQuery,
	useGoogleAuthUrlQuery,
	useGoogleLoginMutation,
} from '../../graphql';
import Loader from '../ui/Loader';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
	const router = useRouter();

	const [login, { loading: googleLogin }] = useGoogleLoginMutation();
	const { loading: googleUrlLoading, data: googleUrl } =
		useGoogleAuthUrlQuery();

	const { loading: userLoading, data: userData, refetch } = useGetUserQuery();

	React.useEffect(() => {
		(async () => {
			if (router.query.code) {
				await login({
					variables: {
						input: {
							code: router.query.code as string,
						},
					},
					update: () => {
						refetch();
					},
				});
			}
		})();
	}, [router.query.code, login]);

	React.useEffect(() => {
		if (userData?.getUser) {
			router.replace('/feed');
		}
	}, [userData?.getUser]);

	if (googleUrlLoading || googleLogin || userLoading) {
		return <Loader variant="fullScreen" />;
	}

	return (
		<>
			<SignUpLayout>
				<div className="flex flex-col flex-grow justify-center">
					<div className="w-5/6 sm:w-1/2 mx-auto text-center">
						<h1 className="text-2xl sm:text-4xl md:text-5xl">
							Login to cruX Forum
						</h1>
						<h2 className="text-sm sm:text-base font-normal text-gray-accent my-2">
							Login to post, view post and do other random bs Lorem Ipsum dolor
							sit amet consectetur adipiscing elit, sed do eiusmod{' '}
						</h2>

						<div className="flex justify-center">
							<Link href={googleUrl!.GoogleAuthUrl} passHref>
								<Button
									isLoading={googleUrlLoading}
									data-testid="google-login-btn"
									className="my-5"
									icon={<GoogleIcon className="w-5" />}
									variant="cyan-outline"
								>
									Login With Google
								</Button>
							</Link>
						</div>

						<div className="flex items-center w-full justify-center">
							<input className="mr-1 bg-black" type="checkbox" />
							<span className="text-sm">Keep me Signed In</span>
						</div>
						<div className="text-sm my-5">
							<span>By signing in to cruX forum you agree to the </span>
							<a href="/" className="underline">
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</SignUpLayout>
		</>
	);
};

export default Home;
