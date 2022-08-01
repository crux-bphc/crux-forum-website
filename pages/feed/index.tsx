import FeedPost from '@/feed/components/FeedPost';
import FeedLayout from '@/feed/layouts';
import withApollo from '@/lib/withApollo';
import Button from '@/shared/ui/Button';
import Input from '@/shared/ui/Input';
import type { NextPage } from 'next';

const FeedIndexRoute: NextPage = () => {
	return (
		<>
			<FeedLayout>
				<div>
					<div className="grid grid-cols-2 gap-y-4 px-3 py-3 sm:px-8 sm:py-8 lg:px-10">
						<div className="col-span-full flex items-center justify-between">
							<h1 className="text-4xl font-semibold">Feed</h1>

							<div className="block xl:hidden">
								<Button size="small">Post Now</Button>
							</div>
						</div>
						<Input placeholder={'Search....'} />
						<div className="col-span-full sm:col-span-1 sm:text-right">
							<p>
								Sort by <span className="font-bold">Popular</span>
							</p>
						</div>
					</div>
					<div className="mt-8 flex flex-col gap-8 py-3 sm:px-8 lg:px-10">
						<FeedPost />
						<FeedPost />
					</div>
				</div>
			</FeedLayout>
		</>
	);
};

// @ts-ignore
export default withApollo({})(FeedIndexRoute);
