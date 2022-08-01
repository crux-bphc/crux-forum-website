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
import { useUserProfileQuery } from '@/graphql/generated';
import UserInfo from '@/profile/components/UserInfo';
import withApollo from '@/lib/withApollo';
import Link from '@/shared/ui/Link';

interface EventItemProps {
	bottomBorder?: boolean;
	event: {
		name: string;
		meetLink: string;
	};
}

const EventItem: React.FC<EventItemProps> = ({
	bottomBorder = true,
	event: { name, meetLink },
}) => {
	return (
		<>
			<div
				data-testid="event-item"
				className={`flex gap-3 ${
					bottomBorder ? 'mb-5' : ''
				} items-center rounded bg-gray-800 p-3`}
			>
				<Avatar size="x-small" />
				<div className="grid flex-1 items-center gap-y-3">
					<div className="row-start-1 row-end-3 items-center">
						<h4 className="text-sm font-semibold">{name}</h4>
						<a className="text-xs text-teal-500 hover:underline" href="#">
							{meetLink}
						</a>
					</div>

					<div className="col-start-2 col-end-2 text-right">
						<p className="self-end text-xs opacity-60 ">06/09/2021 4:20 PM</p>
					</div>

					<div className="col-start-2 col-end-2 text-right">
						<IconButton
							icon={<HiOutlineBell className="h-5 w-5 text-teal-500" />}
							className="p-0"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

const MyProfilePage: NextPage = () => {
	const router = useRouter();

	const { loading, data } = useUserProfileQuery();

	if (loading || !data?.user) {
		return <div>Loading...</div>;
	}

	const user = data.user;

	return (
		<AppLayout>
			<div className="mx-auto grid grid-cols-1 gap-y-10 py-2 px-6 sm:py-10 sm:px-8 md:grid-cols-2 md:gap-x-8 md:gap-y-0 md:py-8 md:px-5 lg:max-w-screen-xl lg:gap-x-20 lg:py-2 lg:px-20 xl:max-w-screen-xl xl:gap-x-40 2xl:max-w-screen-2xl">
				<div className="col-start-1 col-end-2 grid">
					<div>
						<UserInfo user={user} />
						<Button className="w-max" color="teal">
							Edit Your Profile
						</Button>
					</div>
				</div>
				<div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3">
					<h3 className="mb-3 text-2xl font-semibold">Following</h3>
					<div className="mb-6">
						<div className="mb-2">
							{user?.subscriptions?.length ? (
								user?.subscriptions?.map((topic, i) => {
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
						<Link className="mb-8" href="#">
							Find More tags to follow
						</Link>
					</div>
					<div className="mb-3">
						<h3 className="mb-3 text-2xl font-semibold">Post made by me</h3>
						{user?.posted?.length ? (
							<div className="md:h-[300px] md:pr-3">
								{user.posted.map((post: any, i) => {
									return <PostItem post={post} key={i} bottomMargin={i != 5} />;
								})}
							</div>
						) : (
							<p className="my-5 mb-10 text-sm font-extralight">No posts</p>
						)}
					</div>
					<div className="mb-3">
						<h3 className="mb-3 text-xl font-semibold">My Events</h3>
						{user?.subscribedEvents?.length ? (
							<div className="md:h-[200px] md:pr-3">
								{user.subscribedEvents.map((event, i) => {
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
		</AppLayout>
	);
};

// @ts-ignore
export default withApollo({ ssr: false })(MyProfilePage);
