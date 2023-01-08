import React from 'react';
import Avatar from '@/shared/ui/Avatar';
import Tag from '@/shared/ui/Tag';
// import { ChatAltIcon, ThumbUpIcon, ShareIcon } from '@heroicons/react/outline';
// import PostGallery from './PostGallery';
import Link from '@/shared/ui/Link';
import IconButton from '@/shared/ui/IconButton';
import {
	HiOutlineChatAlt,
	HiOutlineShare,
	HiOutlineThumbUp,
	HiXCircle,
} from 'react-icons/hi';
import clsx from 'clsx';
import Image from 'next/image';

interface PostGalleryProps {
	images: string[];
}

const PostGallery: React.FC<PostGalleryProps> = ({ images }) => {
	if (images.length == 1) {
		return (
			<div data-testid="post-gallery" className={'relative'}>
				<img src={images[0]} className="w-full" />
			</div>
		);
	} else if (images.length == 2) {
		return (
			<div
				data-testid="post-gallery"
				className={clsx([
					'grid grid-cols-1 grid-rows-2 gap-y-1 sm:gap-y-2',
					'h-[600px]',
				])}
			>
				<div className="relative">
					<Image src={images[0]} layout="fill" />
				</div>
				<div className="relative">
					<Image src={images[1]} layout="fill" />
				</div>
			</div>
		);
	} else {
		return (
			<div
				data-testid="post-gallery"
				className={clsx([
					'grid grid-cols-2 gap-1 sm:gap-2',
					'h-[200px] sm:h-[400px]',
				])}
			>
				<div className="relative row-span-2">
					<Image src={images[0]} layout="fill" />
				</div>
				<div className="relative">
					<Image src={images[1]} layout="fill" />
				</div>
				<div className="relative">
					<Image src={images[2]} layout="fill" />
				</div>
			</div>
		);
	}
};

const PostReminder: React.FC = () => {
	return (
		<div className="relative my-3 flex flex-col items-center rounded-md py-3 px-3 shadow-2xl sm:flex-row sm:gap-3 sm:py-0">
			<Avatar size="x-small" />
			<div className="py-4 text-center sm:text-left">
				<div>
					<h4 className="mb-1 text-sm font-bold">Club Name</h4>
					<p className="mb-1 text-xs">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
						beatae
					</p>
					<Link className="text-sm" color="blue" href="/">
						Add Reminder
					</Link>
				</div>
			</div>

			<IconButton
				variant="text"
				icon={<HiXCircle className="h-5 w-5 text-gray-accent" />}
				className="absolute top-0 right-0"
			/>
		</div>
	);
};

interface FeedPostProps {
	showActions?: boolean;
}

const FeedPost: React.FC<FeedPostProps> = ({ showActions = true }) => {
	const images = [
		'https://picsum.photos/200/300',
		'https://picsum.photos/200/300',
		'https://picsum.photos/200/300',
	];

	return (
		<div className="relative bg-gray-800 sm:rounded-lg">
			<div className="relative">
				{/* post header   */}
				<div className="px-4 pb-2 pt-4 lg:pt-1">
					<div className="flex items-center justify-between pt-4 lg:items-end">
						<div className="flex gap-2">
							<Avatar size="x-small" />
							<div>
								<h4 className="text-sm font-semibold">John Smith</h4>
								<p className="text-xs font-light">10 mins ago</p>
							</div>
						</div>

						<div className="text-right">
							<div className="hidden gap-2 lg:flex">
								<Tag color="red">cRuX</Tag>
								<Tag color="blue">IEEE</Tag>
								<Tag color="purple">Automation and Robotics</Tag>
							</div>
						</div>
					</div>
					<div className="mt-3 flex gap-2 lg:hidden">
						<Tag color="red">cRuX</Tag>
						<Tag color="blue">IEEE</Tag>
						<Tag color="purple">Automation and Robotics</Tag>
					</div>

					{/* text */}
					<div className="my-4">
						<p className="text-sm font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
							tempor arcu. Nulla facilisi. Phasellus sapien risus, auctor
							feugiat lorem vitae, vulputate euismod nulla. Proin laoreet odio
							condimentum turpis bibendum, vitae luctus sapien pulvinar. Mauris
							vitae suscipit odio. Etiam rhoncus luctus quam eget condimentum.
							Fusce quis elit sed turpis porttitor euismod.
						</p>
					</div>
				</div>

				{/* pictures */}
				<div className="p-0 sm:px-4">
					<PostGallery images={images} />
				</div>

				{/* post actions */}
				{showActions && (
					<div className="mt-2 px-4 pb-2 pt-4 lg:pt-1">
						{/* reactions count */}
						<div className="flex items-center justify-between py-1 px-2">
							<p className="text-sm font-light">12 likes</p>
							<p className="text-sm font-light">15 comments</p>
						</div>

						{/* reminder */}

						<PostReminder />

						{/* <hr className='border border-gray-disabled mb-2 mt-0.5' /> */}

						{/* reaction buttons */}
						<div className="grid grid-cols-3">
							<button className="flex items-center justify-center py-1">
								<span className="mr-1">
									<HiOutlineThumbUp className="inline h-5 w-5 text-teal-500" />
								</span>
								<span className="text-sm">Like</span>
							</button>
							<button className="flex items-center justify-center py-1">
								<span className="mr-1">
									<HiOutlineChatAlt className="inline h-5 w-5 text-teal-500" />
								</span>
								<span className="text-sm">Comment</span>
							</button>
							<button className="flex items-center justify-center py-1">
								<span className="mr-1">
									<HiOutlineShare className="inline h-5 w-5 text-teal-500" />
								</span>
								<span className="text-sm">Share</span>
							</button>
						</div>
					</div>
				)}

				{!showActions && <div className="mt-2 px-4 pb-2 pt-4 lg:pt-1"></div>}
			</div>
		</div>
	);
};

export default FeedPost;
