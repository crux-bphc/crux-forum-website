import { NextPage } from 'next';
import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import withApollo from '@/lib/withApollo';
import useGoogleAuth from '@/auth-registration/hooks/useGoogleAuth';
import Button from '@/shared/ui/Button';
import OAuthPopup from 'react-oauth-popup';
import HomePageLayout from '@/auth-registration/layouts/HomePageLayout';
import Link from '@/shared/ui/Link';

const IndexPage: NextPage = () => {
	const { onCode, url, loading, authURLLoading } = useGoogleAuth('/feed');

	return (
		<>
			<HomePageLayout>
				<div className="mx-auto max-w-2xl py-8 px-2 text-center">
					<h1 className="mb-5 text-4xl font-bold">Welcome to cruX Forum</h1>

					<p className="mb-10 text-gray-accent ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						voluptatem, dolores quisquam ea omnis natus fugit nam repellat ullam
						quis temporibus blanditiis aliquam necessitatibus nisi laboriosam.
						Cupiditate eius eos sunt?
					</p>

					<OAuthPopup
						title="Login with Google"
						height={750}
						width={500}
						url={url}
						onCode={(code) => onCode(code)}
						onClose={() => {
							// do nothing
						}}
					>
						<Button
							disabled={authURLLoading}
							isLoading={loading}
							leftIcon={<BsGoogle />}
						>
							Login With Google
						</Button>
					</OAuthPopup>

					<p className="mt-8 text-gray-50">
						By Signing in to crux forum you agree to the{' '}
						<Link href="#" color="blue">
							Cookie Policy
						</Link>
						.
					</p>
				</div>
			</HomePageLayout>
		</>
	);
};

// @ts-ignore
export default withApollo({ ssr: false })(IndexPage);
