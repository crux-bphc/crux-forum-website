import FeedPost from '@/feed/components/FeedPost';
import FeedLayout from '@/feed/layouts';
import { useGetFeedLazyQuery } from '@/graphql/generated';
import withApollo from '@/lib/withApollo';
import Button from '@/shared/ui/Button';
import FormDropdown from '@/shared/ui/Form/FormDropdown';
import Input from '@/shared/ui/Input';
import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

import {
	useUserProfileLazyQuery,
	useGetEventsLazyQuery,
	useSubscribeToEventMutation,
	useUnsubscribeFromEventMutation,
} from '@/graphql/generated';

import { gql } from '@apollo/client';

import { Event } from '@/shared/types/event';

const FeedIndexRoute: NextPage = () => {
	const [feed, setFeed] = React.useState<NoticeType[]>([]);

	const [getFeed, { loading, data }] = useGetFeedLazyQuery();

	const [getUserProfile, { data: userEventsData, loading: userEventsLoading }] =
		useUserProfileLazyQuery();
	const [getEvents, { data: eventsData, loading: eventsLoading }] =
		useGetEventsLazyQuery();

	const [subscribeToEvent, { error: subscribeError }] =
		useSubscribeToEventMutation();
	const [unsubsribeFromEvent, { error: unsubscribeError }] =
		useUnsubscribeFromEventMutation();

	const rowVirtualizer = useWindowVirtualizer({
		count: data?.getFeed.count ?? 0,
		estimateSize: () => 400,
		overscan: 2,
	});

	React.useEffect(() => {
		getUserProfile();
		getEvents();
	}, []);

	React.useEffect(() => {
		getFeed({
			variables: {
				limit: 5,
				skip: feed.length,
			},
		});
	}, [rowVirtualizer.getVirtualItems()]);

	React.useEffect(() => {
		getFeed({
			variables: {
				limit: 5,
				skip: feed.length,
			},
		});
	}, []);

	React.useEffect(() => {
		if (data) {
			setFeed([...feed, ...(data?.getFeed.data ?? [])]);
		}
	}, [loading]);

	const subscribe = async (event: Event) => {
		try {
			await subscribeToEvent({
				variables: {
					event: event._id,
				},
				update: (cache, data) => {
					if (data.data?.subscribeEvent) {
						cache.modify({
							id: cache.identify(userEventsData?.user),
							fields: {
								subscribedEvents(existingEvents = []) {
									const newSubscribedEvent = cache.writeFragment({
										data: event,
										fragment: gql`
											fragment NewSubscribedEvent on Event {
												_id
												name
												date
												venue
												meetLink
											}
										`,
									});

									return [...existingEvents, newSubscribedEvent];
								},
							},
						});
					}
				},
			});
		} catch {
			console.log('could not subscribe to event', subscribeError);
			return;
		}
	};

	const unsubscribe = async (event: Event) => {
		try {
			await unsubsribeFromEvent({
				variables: {
					event: event._id,
				},
				update: (cache, data) => {
					if (data.data?.unsubscribeEvent) {
						cache.modify({
							id: cache.identify(userEventsData?.user),
							fields: {
								subscribedEvents(existingEvents = []) {
									return existingEvents.filter(
										(existing) => existing.__ref !== cache.identify(event)
									);
								},
							},
						});
					}
				},
			});
		} catch {
			console.log('could not unsubscribe from event', unsubscribeError);
			return;
		}
	};

	return (
		<>
			<FeedLayout
				subscribedEvents={userEventsData?.user?.subscribedEvents ?? []}
				otherEvents={eventsData?.getAllEvents.data}
				subscribe={subscribe}
				unsubscribe={unsubscribe}
			>
				<div>
					<div className="grid grid-cols-2 gap-y-4 px-3 py-3 sm:px-8 sm:py-8 lg:px-10">
						<div className="col-span-full flex items-center justify-between">
							<h1 className="text-4xl font-semibold">Feed</h1>

							<div className="block xl:hidden">
								<Link href="/feed/new" passHref>
									<Button size="small" isLoading={false} disabled={false}>
										Post Now
									</Button>
								</Link>
							</div>
						</div>
						<Input placeholder={'Search....'} className="mb-4" />
						<div className="col-span-full flex items-center justify-end sm:col-span-1 sm:text-right">
							<span className="mb-4 px-2">{'Sort by '}</span>
							<FormDropdown
								required={true}
								id="sortby"
								options={[
									{
										label: 'Popular',
										value: 'popular',
									},
									{
										label: 'Time Posted (Asc.)',
										value: 'time_asc',
									},
									{
										label: 'Time Posted (Desc.)',
										value: 'time_desc',
									},
								]}
								value="popular"
								disabled={false}
							></FormDropdown>
						</div>
					</div>
					<div className="mt-8 flex flex-col gap-8 py-3 sm:px-8 lg:px-10">
						{data ? (
							rowVirtualizer.getVirtualItems().map((virtualItem) => {
								const isLoading = virtualItem.index > feed.length - 1;

								if (!isLoading) {
									const notice = feed[virtualItem.index];

									return (
										<FeedPost
											key={virtualItem.index}
											notice={notice}
											subscribedEvents={userEventsData?.user?.subscribedEvents}
											subscribeEvent={subscribe}
											unsubscribeEvent={unsubscribe}
											ref={rowVirtualizer.measureElement}
										></FeedPost>
									);
								} else {
									return <p key={virtualItem.index}>Loading...</p>;
								}
							})
						) : (
							<></>
						)}
					</div>
				</div>
			</FeedLayout>
		</>
	);
};

// @ts-ignore
export default withApollo({})(FeedIndexRoute);
