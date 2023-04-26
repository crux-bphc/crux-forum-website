import React from 'react';
import { HiAnnotation, HiUserGroup, HiCalendar, HiClock } from 'react-icons/hi';
import Button from '@/shared/ui/Button';
import Image from 'next/image';

interface TopicProfileCardProps {
	title: string;
	subtitle?: string;
	postCount: number;
	subscriberCount: number;
	lastUse: string;
	eventCount: number;
	image?: string;
	subscribed?: boolean;
}

const TopicProfileCard: React.FC<TopicProfileCardProps> = ({
	title,
	subtitle = 'Technical Club',
	postCount,
	subscriberCount,
	lastUse,
	eventCount,
	image = 'https://picsum.photos/id/108/200/200',
	subscribed = false,
}) => {
	return (
		<>
			<div className="min-w-[256px] overflow-hidden rounded-md bg-gray-800 shadow-xl">
				<div className="w-full">
					<Image
						width={400}
						height={300}
						layout="responsive"
						src={image}
						className="w-full"
					/>
				</div>

				<div className="p-5 pt-8">
					<h4 className="mb-1 text-2xl font-semibold capitalize">{title}</h4>
					<p className="mb-5 text-xs uppercase opacity-50">{subtitle}</p>

					<p className="mb-2 flex items-center text-xs opacity-90">
						<span className="mr-1">
							<HiAnnotation className="inline h-5 w-5" />
						</span>
						<span>{postCount} Posts</span>
					</p>
					<p className="mb-2 flex items-center text-xs opacity-90">
						{' '}
						<span className="mr-1">
							<HiUserGroup className="inline h-5 w-5" />
						</span>
						<span>{subscriberCount} Subscribers</span>
					</p>
					<p className="mb-2 flex items-center text-xs opacity-90">
						{' '}
						<span className="mr-1">
							<HiCalendar className="inline h-5 w-5" />
						</span>
						<span>{eventCount} Events</span>
					</p>
					<p className="mb-2 flex items-center text-xs opacity-90">
						{' '}
						<span className="mr-1">
							<HiClock className="inline h-5 w-5"></HiClock>
						</span>
						<span>Last used {lastUse}</span>
					</p>

					<div className="mt-8 flex w-full justify-center">
						{subscribed ? (
							<Button className="w-full py-1" disabled>
								Subscribed!
							</Button>
						) : (
							<Button className="w-full py-1">Subscribe</Button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default TopicProfileCard;
