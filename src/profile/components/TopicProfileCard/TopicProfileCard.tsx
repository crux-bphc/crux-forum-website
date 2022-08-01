import React from 'react';
import { HiAnnotation, HiUserGroup, HiCalendar, HiClock } from 'react-icons/hi';
import Button from '@/shared/ui/Button';
import Image from 'next/image';

const TopicProfileCard: React.FC = () => {
	return (
		<>
			<div className="min-w-[256px] overflow-hidden rounded-md bg-gray-800 shadow-xl">
				<div className="w-full">
					<Image
						width={400}
						height={300}
						layout="responsive"
						src="https://picsum.photos/id/108/200/200"
						className="w-full"
					/>
				</div>

				<div className="p-5 pt-8">
					<h4 className="mb-1 text-2xl font-semibold capitalize">
						lorem ispum dolor
					</h4>
					<p className="mb-5 text-xs uppercase opacity-50">Technical Club</p>

					<p className="mb-2 flex items-center text-xs opacity-90">
						<span className="mr-1">
							<HiAnnotation className="inline h-5 w-5" />
						</span>
						<span>69 Posts</span>
					</p>
					<p className="mb-2 flex items-center text-xs opacity-90">
						{' '}
						<span className="mr-1">
							<HiUserGroup className="inline h-5 w-5" />
						</span>
						<span>420 Subscribers</span>
					</p>
					<p className="mb-2 flex items-center text-xs opacity-90">
						{' '}
						<span className="mr-1">
							<HiCalendar className="inline h-5 w-5" />
						</span>
						<span>69 Events</span>
					</p>
					<p className="mb-2 flex items-center text-xs opacity-90">
						{' '}
						<span className="mr-1">
							<HiClock className="inline h-5 w-5"></HiClock>
						</span>
						<span>Last used 10 hours ago</span>
					</p>

					<div className="mt-8 flex w-full justify-center">
						<Button className="w-full py-1">Subscribe</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopicProfileCard;
