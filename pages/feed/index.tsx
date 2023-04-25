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

const FeedIndexRoute: NextPage = () => {
	const [getFeed, { loading, data }] = useGetFeedLazyQuery();

	React.useEffect(() => {
		getFeed({
			variables: {
				limit: 5,
				skip: 0,
			},
		});
	}, []);

	React.useEffect(() => {
		console.log(data);
	}, [loading]);

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
						{data ? (
							data.getFeed.data.map((notice) => (
								<FeedPost key={notice._id} notice={notice} />
							))
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
