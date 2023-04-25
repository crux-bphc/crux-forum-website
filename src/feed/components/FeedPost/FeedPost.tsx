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
import EventItem from '@/shared/components/EventItem';
import RTE from '@/feed/new/components/RTE';

interface PostGalleryProps {
	images: string[];
}

const PostGallery: React.FC<PostGalleryProps> = ({ images }) => {
	if (images.length == 0) {
		return <></>;
	} else if (images.length == 1) {
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

interface NoticeDetails {
	_id?: string;
	postedBy: {
		_id: string;
		name: string;
		profilePicture: string;
	};
	title: string;
	body: string;
	time: string;
	attachedImages?: string[] | null | undefined;
	topics?:
		| {
				_id: string;
				name: string;
				color: string;
		  }[]
		| null
		| undefined;
	isEvent: boolean;
	linkedEvents: any[];
	likeCount: number;
}

interface FeedPostProps {
	showActions?: boolean;
	notice: NoticeDetails;
}

const FeedPost: React.FC<FeedPostProps> = ({ showActions = true, notice }) => {
	const {
		_id,
		postedBy,
		body,
		time,
		attachedImages,
		topics,
		linkedEvents,
		likeCount,
	} = notice;

	return (
		<div className="relative bg-gray-800 sm:rounded-lg">
			<div className="relative">
				{/* post header   */}
				<div className="px-4 pb-2 pt-4 lg:pt-1">
					<div className="flex items-center justify-between pt-4 lg:items-end">
						<div className="flex gap-2">
							<Avatar src={postedBy.profilePicture} size="x-small" />
							<div>
								<h4 className="text-sm font-semibold">{postedBy.name}</h4>
								<p className="text-xs font-light">{time}</p>
							</div>
						</div>

						<div className="text-right">
							<div className="hidden gap-2 lg:flex">
								{/* @ts-ignore */}
								{topics?.map((topic) => (
									<Tag key={topic._id} color={topic.color}>
										{topic.name}
									</Tag>
								))}
							</div>
						</div>
					</div>
					<div className="mt-3 flex gap-2 lg:hidden">
						{/* @ts-ignore */}
						{topics?.map((topic) => (
							<Tag key={topic._id} color={topic.color}>
								{topic.name}
							</Tag>
						))}
					</div>

					{/* text */}
					<div className="my-4">
						<RTE initial={JSON.parse(body)} readonly></RTE>
					</div>
				</div>

				{/* pictures */}
				<div className="p-0 sm:px-4">
					<PostGallery images={attachedImages ?? []} />
				</div>

				{/* post actions */}
				{showActions && (
					<div className="mt-2 px-4 pb-2 pt-4 lg:pt-1">
						{/* Linked Events */}
						<div>
							<h4 className="font-semibold">Events</h4>
							{linkedEvents.map((event) => (
								<EventItem key={event._id} event={event} shadow={true} />
							))}
						</div>

						{/* reactions count */}
						<div className="flex items-center justify-between py-1 px-2">
							<p className="text-sm font-light">{likeCount} likes</p>
							{/* <p className="text-sm font-light">15 comments</p> */}
						</div>

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
