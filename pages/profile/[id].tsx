import React from 'react';
import AppLayout from '@/global/layouts/AppLayout';
import { Tab as HTab } from '@headlessui/react';
import { NextPage } from 'next';

import withApollo from '@/lib/withApollo';
import PostItem from '@/shared/components/PostItem';
import TabList from '@/shared/ui/Tab/TabList';
import TabLink from '@/shared/ui/Tab/TabLink';
import TopicProfileCard from '@/profile/components/TopicProfileCard';

const TagProfilePage: NextPage = () => {
	const aboutView = (
		<div className="w-full rounded bg-gray-800 px-4 py-2 shadow-xl">
			<h4 className="mb-2 text-2xl font-bold">About cruX BPHC</h4>
			<p className="pb-2 text-sm font-light">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae
				asperiores laborum commodi distinctio excepturi quos odit cum, corrupti
				quod hic blanditiis iusto possimus dicta reprehenderit delectus
				cupiditate iure dolorum.
			</p>
			<p className="pb-2 text-sm font-light">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae
				asperiores laborum commodi distinctio excepturi quos odit cum, corrupti
				quod hic blanditiis iusto possimus dicta reprehenderit delectus
				cupiditate iure dolorum.
			</p>
		</div>
	);

	const postsView = (
		<div>
			<div className="mt-3 w-full rounded bg-gray-800 px-4 py-2 shadow-xl">
				<h4 className="text-2xl font-bold">Posts</h4>
			</div>
			<div className="pt-3">
				{Array(5)
					.fill(0)
					.map((_, i) => {
						return <PostItem key={i} />;
					})}
			</div>
		</div>
	);

	return (
		<>
			<AppLayout>
				<div className="mx-auto pt-4 lg:max-w-screen-xl lg:pt-16 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
					<div className="grid-gap-4 hidden px-7 md:grid md:grid-cols-6">
						<div className="col-span-1 col-start-2 md:col-start-1 md:mt-5 lg:mt-0">
							<div className="px-5 md:fixed md:px-0">
								<TopicProfileCard />
							</div>
						</div>
						<div className="col-span-4 col-start-3 w-full px-5 md:mt-5 lg:mt-0 lg:px-8 2xl:col-start-2">
							{aboutView}
							{postsView}
						</div>
					</div>

					<div className="md:hidden">
						<HTab.Group>
							<TabList>
								<TabLink>Home</TabLink>
								<TabLink>About</TabLink>
								<TabLink>Posts</TabLink>
							</TabList>
							<HTab.Panels>
								<div className="p-3">
									<HTab.Panel>
										<div className="mx-auto w-full py-4 sm:w-2/3">
											<TopicProfileCard />
										</div>
									</HTab.Panel>
									<HTab.Panel>{aboutView}</HTab.Panel>
									<HTab.Panel>{postsView}</HTab.Panel>
								</div>
							</HTab.Panels>
						</HTab.Group>
					</div>
				</div>
			</AppLayout>
		</>
	);
};

// @ts-ignore
export default withApollo({ ssr: false })(TagProfilePage);
