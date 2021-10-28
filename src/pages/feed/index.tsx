import React from 'react';
import FeedLayout from '../../modules/layouts/FeedLayout';
import FeedPost from '../../modules/posts/FeedPost';
import Button from '../../ui/Button';
import SearchBar from '../../ui/SearchBar';

const Home: React.FC = () => {
	return (
		<>
			<FeedLayout>
				<div>
					<div className="grid grid-cols-2 gap-y-4 px-3 py-3 lg:px-10 sm:px-8 sm:py-8">
						<div className="col-span-full flex items-center justify-between">
							<h1 className="text-4xl font-semibold">Feed</h1>

							<div className="block xl:hidden">
								<Button size="sm">Post Now</Button>
							</div>
						</div>
						<SearchBar className="col-span-full sm:col-span-1" />
						<div className="col-span-full sm:col-span-1 sm:text-right">
							<p>
								Sort by <span className="font-bold">Popular</span>
							</p>
						</div>
					</div>
					<div className="mt-8 flex flex-col gap-8 lg:px-10 sm:px-8 py-3">
						<FeedPost />
						<FeedPost />
					</div>
				</div>
			</FeedLayout>
		</>
	);
};

export default Home;
