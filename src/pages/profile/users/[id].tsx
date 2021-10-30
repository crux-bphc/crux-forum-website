import { useRouter } from 'next/dist/client/router';
import React from 'react';
import {
	useGetSingleUserQuery,
	useGetUserSubscribedTopicsQuery,
} from '../../../../graphql';
import AppLayout from '../../../modules/layouts/AppLayout';
import PostItem from '../../../modules/posts/PostItem';
import UserInfo from '../../../modules/profile/UserInfo';
import ClubTag from '../../../ui/ClubTag';
import Container from '../../../ui/Container';
import Loader from '../../../ui/Loader';

interface PublicProfileProps {}

const PublicProfile: React.FC<PublicProfileProps> = ({}) => {
	const router = useRouter();

	const id = router.query.id as string;

	const {
		loading: userLoading,
		data: userData,
		error: userError,
	} = useGetSingleUserQuery({
		variables: { id },
	});

	const {
		loading: topicsLoading,
		data: sessionUserData,
		error: sessionUserError,
	} = useGetUserSubscribedTopicsQuery();

	if (userLoading || topicsLoading) {
		return <Loader variant="fullScreen" />;
	}

	if (userError || sessionUserError) {
		return <div>invalid user</div>;
	}

	const { posted, subscriptions } = userData!.getSingleUser!;

	const sessionUserSubscriptions = sessionUserData!.getUser!.subscriptions;

	const commonTopics = subscriptions!.filter((topic) =>
		sessionUserSubscriptions!.includes(topic)
	);

	const nonCommonTopics = subscriptions!.filter(
		(topic) => !sessionUserSubscriptions!.includes(topic)
	);

	console.log(userError);
	console.log(sessionUserError);

	return (
		<>
			<AppLayout>
				<Container className="grid py-2 px-6 lg:py-2 lg:px-20 md:py-8 md:px-5 xl:gap-x-40 lg:gap-x-20 md:gap-x-8 md:grid-cols-2 grid-cols-1 sm:py-10 sm:px-8 gap-y-10 md:gap-y-0">
					<div className="col-start-1 col-end-2 grid">
						<div>
							<UserInfo user={userData!.getSingleUser!} />
						</div>
					</div>
					<div className="md:col-start-2 md:col-end-3 col-start-1 col-end-2">
						<h3 className="mb-3">Follows</h3>
						<div className="mb-6">
							<h5 className="mb-2">Common With You</h5>
							<div className="mb-2">
								{commonTopics.length ? (
									commonTopics.map((topic, i) => {
										return (
											<div key={i} className="mr-2 inline-block mb-2">
												<ClubTag
													name={topic.name}
													color={topic.color}
													onClick={() => {
														router.push('/profile/crux');
													}}
												/>
											</div>
										);
									})
								) : (
									<p className="text-sm font-extralight">No common topics</p>
								)}
							</div>
						</div>

						<div className="mb-6">
							<h5 className="mb-2">Others</h5>
							<div className="mb-2" data-testid="tags-container">
								{nonCommonTopics.length ? (
									nonCommonTopics.map((topic, i) => {
										return (
											<div key={i} className="mr-2 inline-block mb-2">
												<ClubTag
													name={topic.name}
													color={topic.color}
													onClick={() => {
														router.push('/profile/crux');
													}}
												/>
											</div>
										);
									})
								) : (
									<p className="text-sm font-extralight">No topics</p>
								)}
							</div>
						</div>
						<div className="mb-3">
							<h3 className="mb-3">Posts</h3>
							{posted!.length ? (
								<div className="md:h-[450px] pb-5 md:pr-3 md:overflow-y-scroll ">
									{posted!.map((post, i) => {
										return <PostItem post={post} key={i} />;
									})}
								</div>
							) : (
								<p className="text-sm font-extralight">No posts to show</p>
							)}
						</div>
					</div>
				</Container>
			</AppLayout>
		</>
	);
};

// export default withApollo({ ssr: true })(PublicProfile);
export default PublicProfile;
