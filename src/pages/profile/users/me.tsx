import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useGetUserProfileQuery } from '../../../../graphql';

import EventItem from '../../../modules/events/EventItem';
import AppLayout from '../../../modules/layouts/AppLayout';
import PostItem from '../../../modules/posts/PostItem';
import UserInfo from '../../../modules/profile/UserInfo';
import Button from '../../../ui/Button';
import ClubTag from '../../../ui/ClubTag';
import Container from '../../../ui/Container';
import Loader from '../../../ui/Loader';
import ScrollContainer from '../../../ui/ScrollBar';

interface MyProfileProps {}

const MyProfile: React.FC<MyProfileProps> = ({}) => {
	const router = useRouter();

	const {
		loading: userLoading,
		data: userData,
	} = useGetUserProfileQuery();

	if (userLoading) {
		return <Loader variant="fullScreen" />;
	}
	console.log('userdata', userData);

	const {
		name,
		bio,
		email,
		discord,
		batch,
		profilePicture,
		posted,
		subscribedEvents,
		subscriptions,
	} = userData!.getUser!;

	console.log(userData?.getUser);

	return (
		<AppLayout>
			<Container className="grid py-2 px-6 lg:py-2 lg:px-20 md:py-8 md:px-5 xl:gap-x-40 lg:gap-x-20 md:gap-x-8 md:grid-cols-2 grid-cols-1 sm:py-10 sm:px-8 gap-y-10 md:gap-y-0">
				<div className="col-start-1 col-end-2 grid">
					<div>
						<UserInfo
							user={{
								name,
								bio,
								email,
								discord,
								batch,
								profilePicture,
							}}
						/>
						{/* <pre>{JSON.stringify(error, null, 4)}</pre> */}
						<Button className="w-max" variant="cyan">
							Edit Your Profile
						</Button>
					</div>
				</div>
				<div className="md:col-start-2 md:col-end-3 col-start-1 col-end-2">
					<h3 className="mb-3">Following</h3>
					<div className="mb-6">
						<div className="mb-2">
							{subscriptions!.length ? (
								subscriptions!.map((topic, i) => {
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
								<p className="text-sm font-extralight">No topics followed</p>
							)}
						</div>
						<a className="hover:underline cursor-pointer">
							Find More tags to follow
						</a>
					</div>
					<div className="mb-3">
						<h3 className="mb-3">Post made by me</h3>
						{posted!.length ? (
							<ScrollContainer className="md:h-[300px] md:pr-3">
								{posted!.map((post, i) => {
									return <PostItem post={post} key={i} bottomMargin={i != 5} />;
								})}
							</ScrollContainer>
						) : (
							<p className="text-sm font-extralight">No posts</p>
						)}
					</div>
					<div className="mb-3">
						<h3 className="mb-3">My Events</h3>
						{subscribedEvents!.length ? (
							<ScrollContainer className="md:h-[200px] md:pr-3">
								{subscribedEvents!.map((event, i) => {
									return (
										<EventItem key={i} event={event} bottomBorder={i != 3} />
									);
								})}
							</ScrollContainer>
						) : (
							<p className="text-sm font-extralight">No subscribed events</p>
						)}
					</div>
				</div>
			</Container>
		</AppLayout>
	);
};

// export default withApollo({ ssr: true })(MyProfile);
export default MyProfile;
