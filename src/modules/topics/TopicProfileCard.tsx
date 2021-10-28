import {
	AnnotationIcon,
	UserGroupIcon,
	CalendarIcon,
	ClockIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import Button from '../../ui/Button';

interface TopicProfileCardProps {}

const TopicProfileCard: React.FC<TopicProfileCardProps> = ({}) => {
	return (
		<>
			<div className="bg-gray-800 min-w-[256px] rounded-md shadow-xl">
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
					<h4 className="mb-1 capitalize">lorem ispum dolor</h4>
					<p className="text-xs opacity-50 mb-5 uppercase">Technical Club</p>

					<p className="text-xs opacity-90 mb-2 flex items-center">
						<span className="mr-1">
							<AnnotationIcon className="inline w-5 h-5"></AnnotationIcon>
						</span>
						<span>69 Posts</span>
					</p>
					<p className="text-xs opacity-90 mb-2 flex items-center">
						{' '}
						<span className="mr-1">
							<UserGroupIcon className="inline w-5 h-5"></UserGroupIcon>
						</span>
						<span>420 Subscribers</span>
					</p>
					<p className="text-xs opacity-90 mb-2 flex items-center">
						{' '}
						<span className="mr-1">
							<CalendarIcon className="inline w-5 h-5"></CalendarIcon>
						</span>
						<span>69 Events</span>
					</p>
					<p className="text-xs opacity-90 mb-2 flex items-center">
						{' '}
						<span className="mr-1">
							<ClockIcon className="inline w-5 h-5"></ClockIcon>
						</span>
						<span>Last used 10 hours ago</span>
					</p>

					<div className="flex w-full justify-center mt-8">
						<Button variant="cyan" className="py-1 w-full">
							Subscribe
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopicProfileCard;
