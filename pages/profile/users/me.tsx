import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Tag from '@/shared/ui/Tag';
import { HiOutlineBell } from 'react-icons/hi';
import Avatar from '@/shared/ui/Avatar';
import IconButton from '@/shared/ui/IconButton';
import AppLayout from '@/global/layouts/AppLayout';
import Button from '@/shared/ui/Button';
import PostItem from '@/shared/components/PostItem';
import {
	useUserProfileQuery,
	useSubscribeToTopicMutation,
	useUnsubscribeFromTopicMutation,
} from '@/graphql/generated';
import UserInfo from '@/profile/components/UserInfo';
import withApollo from '@/lib/withApollo';
import { gql } from '@apollo/client';
import Link from '@/shared/ui/Link';
import useDisclosure from '@/shared/hooks/useDisclosure/useDisclosure';
import EventItem from '@/shared/components/EventItem';
import TopicsModal from '@/shared/components/TopicsModal';
import { Topic } from '@/shared/types/topic';

const MyProfilePage: NextPage = () => {
	const router = useRouter();

	const { loading, data } = useUserProfileQuery();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedTags, setSelectedTags] = React.useState<Topic[]>([]);

	const [subscribeToTopic] = useSubscribeToTopicMutation();
	const [unsubscribeFromTopic] = useUnsubscribeFromTopicMutation();

	const onListItemClick = async (topic: Topic) => {
		if (selectedTags.find((el) => el._id === topic._id)) {
			try {
				await unsubscribeFromTopic({
					variables: {
						topic: topic._id,
					},
					update: (cache, subsribeData) => {
						if (subsribeData.data?.unsubscribeTopic) {
							cache.modify({
								id: cache.identify(data.user),
								fields: {
									subscriptions(existingSubscriptions = []) {
										return existingSubscriptions.filter(
											(existing) => existing.__ref !== cache.identify(topic)
										);
									},
								},
							});
						}
					},
				});
			} catch {
				console.log('error');
				return;
			}
			const updatedTags = selectedTags.filter((el) => el._id !== topic._id);
			setSelectedTags(updatedTags);
		} else {
			try {
				await subscribeToTopic({
					variables: {
						topic: topic._id,
					},
					update: (cache, subsribeData) => {
						if (subsribeData.data?.subscribeTopic) {
							cache.modify({
								id: cache.identify(data.user),
								fields: {
									subscriptions(existingSubscriptions = []) {
										const newSubscription = cache.writeFragment({
											data: topic,
											fragment: gql`
												fragment NewTopic on Topic {
													_id
													name
													color
												}
											`,
										});
										return [...existingSubscriptions, newSubscription];
									},
								},
							});
						}
					},
				});
			} catch {
				console.log('error');
				return;
			}
			setSelectedTags([...selectedTags, topic]);
		}
	};

	React.useEffect(() => {
		if (!loading && data) {
			setSelectedTags(data.user.subscriptions);
		}
	}, [loading]);

	if (loading || !data?.user) {
		return <div>Loading...</div>;
	}

	return (
		<AppLayout>
			<div className="mx-auto grid grid-cols-1 gap-y-10 py-2 px-6 sm:py-10 sm:px-8 md:grid-cols-2 md:gap-x-8 md:gap-y-0 md:py-8 md:px-5 lg:max-w-screen-xl lg:gap-x-20 lg:py-2 lg:px-20 xl:max-w-screen-xl xl:gap-x-40 2xl:max-w-screen-2xl">
				<div className="col-start-1 col-end-2 grid">
					<div>
						<UserInfo user={data.user} />
						<Button className="w-max" color="teal">
							Edit Your Profile
						</Button>
					</div>
				</div>
				<div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3">
					<h3 className="mb-3 text-2xl font-semibold">Following</h3>
					<div className="mb-6">
						<div className="mb-2">
							{data.user?.subscriptions?.length ? (
								data.user?.subscriptions?.map((topic, i) => {
									return (
										<div key={i} className="mr-2 mb-2 inline-block">
											<Tag
												color={topic.color as any}
												onClick={() => {
													router.push('/profile/crux');
												}}
											>
												{topic.name}
											</Tag>
										</div>
									);
								})
							) : (
								<p className="py-5 text-sm font-extralight">
									No topics followed
								</p>
							)}
						</div>
						<Link className="mb-8" href="#" onClick={onOpen}>
							Find More tags to follow
						</Link>
						<TopicsModal
							isOpen={isOpen}
							onClose={onClose}
							selectedTags={selectedTags}
							onListItemClick={onListItemClick}
						/>
					</div>
					<div className="mb-3">
						<h3 className="mb-3 text-2xl font-semibold">Post made by me</h3>
						<div className="overflow-scroll">
							{data.user?.posted?.length ? (
								<div className="h-[300px] md:pr-3">
									{data.user.posted.map((post: any, i) => {
										return <PostItem key={i} bottomMargin={i != 5} />;
									})}
								</div>
							) : (
								<p className="my-5 mb-10 text-sm font-extralight">No posts</p>
							)}
						</div>
					</div>
					<div className="mb-3">
						<h3 className="mb-3 text-xl font-semibold">My Events</h3>
						<div className="overflow-scroll">
							{data.user?.subscribedEvents?.length ? (
								<div className="h-[200px] md:pr-3">
									{data.user.subscribedEvents.map((event, i) => {
										return (
											<EventItem key={i} event={event} bottomBorder={i != 3} />
										);
									})}
								</div>
							) : (
								<p className="text-sm font-extralight">No subscribed events</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</AppLayout>
	);
};

// @ts-ignore
export default withApollo({ ssr: false })(MyProfilePage);
