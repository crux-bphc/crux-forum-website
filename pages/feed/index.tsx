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

const colors = {
	red: 'bg-red-500 text-gray-800',
	green: 'bg-green-500',
	purple: 'bg-purple-500',
	teal: 'bg-teal-500 text-gray-800',
	blue: 'bg-blue-500',
};

const mockNotice = {
	_id: "abc123",
	title: "Lorem Ipsum",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tempor arcu. Nulla facilisi. Phasellus sapien risus, auctor feugiat lorem vitae, vulputate euismod nulla. Proin laoreet odio condimentum turpis bibendum, vitae luctus sapien pulvinar. Mauris vitae suscipit odio. Etiam rhoncus luctus quam eget condimentum. Fusce quis elit sed turpis porttitor euismod.",
	time: "2022-10-04T13:10:52.525Z",
	postedBy: {
		_id: "633417dd9401de010eebdee7",
		name: "ANIMESH AV",
		profilePicture: "https://d23hwxa527zkay.cloudfront.net/f20200193.jpg"
	},
	attachedImages: [
		'https://picsum.photos/200/300',
		'https://picsum.photos/200/301',
		'https://picsum.photos/200/302',
	],
	topics: [
		{
			_id: '614c8f08fe60d017770f5ec7',
			name: 'Linkbuzz',
			color: "blue" as keyof typeof colors
		},
		{
			_id: '614c8f08fe60d017770f5ec8',
			name: 'Eabox',
			color: "purple"
		},
	],
	isEvent: false,
	linkedEvents: [
		{
			"_id": "633c3156cd75e701a37dc75b",
			"name": "First Event in History",
			"venue": "LTC Lobby",
			"description": "Some random event which no one attends",
			"date": "16/10/2022 4:00PM"
		},
		{
			"_id": "633c3156cd75e701a37dc75c",
			"name": "Second Event in History",
			"venue": "Mess 1",
			"description": "Some other random event which no one attends",
			"date": "16/10/2022 4:00PM",
			"meetLink": "https://meet.google.com"
		}
	],
	likeCount: 12
}

const FeedIndexRoute: NextPage = () => {
	const [getFeed, {loading, data}] = useGetFeedLazyQuery();
	
	React.useEffect(() => {
		getFeed({
			variables: {
				limit: 5,
				skip: 0,
			}
		});
	},[]);

	React.useEffect(() => {
		console.log(data);
	},[loading]);

	return (
		<>
			<FeedLayout>
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
						{data?
						data.getFeed.data.map(notice => <FeedPost key={notice._id} notice={notice} />): <></>}
						{/* @ts-ignore */}
						<FeedPost notice={mockNotice} />
						{/* @ts-ignore */}
						<FeedPost notice={mockNotice} />
					</div>
				</div>
			</FeedLayout>
		</>
	);
};

// @ts-ignore
export default withApollo({})(FeedIndexRoute);
