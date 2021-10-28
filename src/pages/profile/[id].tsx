import React from 'react';
import AppLayout from '../../modules/layouts/AppLayout';
import PostItem from '../../modules/posts/PostItem';
import Container from '../../ui/Container';
import TopicProfileCard from '../../modules/topics/TopicProfileCard';
import { Tab, TabList } from '../../ui/Tab';
import { Tab as HTab } from '@headlessui/react';

interface TagProfilePageProps {}

const TagProfilePage: React.FC<TagProfilePageProps> = ({}) => {
	const aboutView = (
		<div className="w-full shadow-xl bg-gray-800 px-4 py-2 rounded">
			<h4 className="mb-2">About cruX BPHC</h4>
			<p className="text-sm font-light pb-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae
				asperiores laborum commodi distinctio excepturi quos odit cum, corrupti
				quod hic blanditiis iusto possimus dicta reprehenderit delectus
				cupiditate iure dolorum.
			</p>
			<p className="text-sm font-light pb-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, vitae
				asperiores laborum commodi distinctio excepturi quos odit cum, corrupti
				quod hic blanditiis iusto possimus dicta reprehenderit delectus
				cupiditate iure dolorum.
			</p>
		</div>
	);

	const postsView = (
		<div>
			<div className="w-full shadow-xl bg-gray-800 px-4 py-2 mt-3 rounded">
				<h4>Posts</h4>
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
				<Container className="pt-4 lg:pt-16">
					<div className="md:grid-cols-6 grid-gap-4 md:grid hidden px-7">
						<div className="col-span-1 md:col-start-1 col-start-2 lg:mt-0 md:mt-5">
							<div className="md:fixed px-5 md:px-0">
								<TopicProfileCard />
							</div>
						</div>
						<div className="col-span-4 2xl:col-start-2 col-start-3 w-full px-5 lg:px-8 md:mt-5 lg:mt-0">
							{aboutView}
							{postsView}
						</div>
					</div>

					<div className="md:hidden">
						<HTab.Group>
							<TabList>
								<Tab>Home</Tab>
								<Tab>About</Tab>
								<Tab>Posts</Tab>
							</TabList>
							<HTab.Panels>
								<div className="p-3">
									<HTab.Panel>
										<div className="sm:w-2/3 w-full py-4 mx-auto">
											<TopicProfileCard />
										</div>
									</HTab.Panel>
									<HTab.Panel>{aboutView}</HTab.Panel>
									<HTab.Panel>{postsView}</HTab.Panel>
								</div>
							</HTab.Panels>
						</HTab.Group>
					</div>
				</Container>
			</AppLayout>
		</>
	);
};

export default TagProfilePage;
