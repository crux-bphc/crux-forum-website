import FeedPost from '@/feed/components/FeedPost';
import AppLayout from '@/global/layouts/AppLayout';
import { TopicType } from '@/graphql/generated';
import withApollo from '@/lib/withApollo';
import EventItem from '@/shared/components/EventItem';
import TopicsModal from '@/shared/components/TopicsModal';
import useDisclosure from '@/shared/hooks/useDisclosure';
import Button from '@/shared/ui/Button';
import Tag from '@/shared/ui/Tag';
import React from 'react';
import { HiOutlinePlusCircle, HiOutlineXCircle } from 'react-icons/hi';

const DUMMY_DATA: any = [
	{
		_id: '614c8f08fe60d017770f5ebd',
		name: 'Quire',
	},
	{
		_id: '614c8f08fe60d017770f5ebe',
		name: 'Brainbox',
	},
	{
		_id: '614c8f08fe60d017770f5ebf',
		name: 'Yata',
	},
	{
		_id: '614c8f08fe60d017770f5ec0',
		name: 'Izio',
	},
	{
		_id: '614c8f08fe60d017770f5ec1',
		name: 'Browsedrive',
	},
	{
		_id: '614c8f08fe60d017770f5ec2',
		name: 'Skyba',
	},
	{
		_id: '614c8f08fe60d017770f5ec3',
		name: 'Roodel',
	},
	{
		_id: '614c8f08fe60d017770f5ec4',
		name: 'Feedmix',
	},
	{
		_id: '614c8f08fe60d017770f5ec5',
		name: 'Midel',
	},
	{
		_id: '614c8f08fe60d017770f5ec6',
		name: 'Teklist',
	},
	{
		_id: '614c8f08fe60d017770f5ec7',
		name: 'Linkbuzz',
	},
	{
		_id: '614c8f08fe60d017770f5ec8',
		name: 'Eabox',
	},
	{
		_id: '614c8f08fe60d017770f5ec9',
		name: 'Skyba',
	},
	{
		_id: '614c8f08fe60d017770f5eca',
		name: 'Livepath',
	},
	{
		_id: '614c8f08fe60d017770f5ecb',
		name: 'Kwimbee',
	},
	{
		_id: '614c8f08fe60d017770f5ecc',
		name: 'Voonder',
	},
	{
		_id: '614c8f08fe60d017770f5ecd',
		name: 'Flipbug',
	},
	{
		_id: '614c8f08fe60d017770f5ece',
		name: 'Vimbo',
	},
	{
		_id: '614c8f08fe60d017770f5ecf',
		name: 'Ainyx',
	},
	{
		_id: '614c8f08fe60d017770f5ed0',
		name: 'Omba',
	},
	{
		_id: '614c8f08fe60d017770f5ed1',
		name: 'Aimbo',
	},
	{
		_id: '614c8f08fe60d017770f5ed2',
		name: 'Oozz',
	},
	{
		_id: '614c8f08fe60d017770f5ed3',
		name: 'Pixoboo',
	},
	{
		_id: '614c8f08fe60d017770f5ed4',
		name: 'Livefish',
	},
	{
		_id: '614c8f08fe60d017770f5ed5',
		name: 'Twimm',
	},
	{
		_id: '614c8f08fe60d017770f5ed6',
		name: 'Tazz',
	},
	{
		_id: '614c8f08fe60d017770f5ed7',
		name: 'Zoozzy',
	},
	{
		_id: '614c8f08fe60d017770f5ed8',
		name: 'Skinix',
	},
	{
		_id: '614c8f08fe60d017770f5ed9',
		name: 'Avamm',
	},
	{
		_id: '614c8f08fe60d017770f5eda',
		name: 'Blogtags',
	},
];

const EditPostLayout: React.FC<any> = ({ children }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [selectedTags, setSelectedTags] = React.useState<any[]>([
		{
			_id: '614c8f08fe60d017770f5ebd',
			name: 'Quire',
		},
		{
			_id: '614c8f08fe60d017770f5ebe',
			name: 'Brainbox',
		},
	]);

	const [numLinkedEvents, setNumLinkedEvents] = React.useState(0);

	const onListItemClick = (topic: TopicType) => {
		if (selectedTags.find((el) => el._id === topic._id)) {
			const updatedTags = selectedTags.filter((el) => el._id !== topic._id);
			console.log(updatedTags);
			setSelectedTags(updatedTags);
		} else {
			setSelectedTags([...selectedTags, topic]);
		}
	};

	return (
		<>
			{/* @ts-ignore */}
			<TopicsModal
				tags={DUMMY_DATA}
				{...{ isOpen, onClose, onListItemClick, selectedTags }}
			/>
			<AppLayout>
				<div className="grid grid-cols-12">
					<div className="col-span-12 block h-full w-full md:col-span-8">
						<div className="mx-6 my-4 bg-gray-800 sm:rounded-lg">
							<div className="px-4 pb-2 pt-2 lg:pt-1">
								<h4 className="mt-1 font-semibold">Notice Content</h4>
								<textarea className="focus:border-green mt-3 mb-2 block h-[400px] w-full resize-none border-2 border-gray-100 bg-gray-900 py-4 px-6 focus:border-2 focus:outline-none sm:rounded-lg"></textarea>
								<p className="w-100 text-green relative top-[-40px] pr-3 text-right">
									300 words
								</p>
							</div>
						</div>
						<div className="mx-6 my-4 bg-gray-800 sm:rounded-lg">
							<div className="px-4 pb-2 pt-2 lg:pt-1">
								<h4 className="mt-1 font-semibold">Tag Your Notice</h4>
								<div className="flex items-center">
									<div className="my-3 w-full">
										{!!selectedTags.length && (
											<div className="grid grid-cols-2 items-center gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
												{selectedTags.map((tag) => {
													return (
														<Tag
															key={tag._id}
															color={'purple'}
															onClick={() => {
																//
															}}
														>
															{tag.name}
														</Tag>
													);
												})}
											</div>
										)}
									</div>
									<HiOutlinePlusCircle
										className="text-green h-6 w-6 cursor-pointer"
										onClick={onOpen}
									/>
								</div>
							</div>
						</div>
						{new Array(numLinkedEvents).fill(0).map((d, index) => (
							<div key={index} className="mx-6 my-4 bg-gray-800 sm:rounded-lg">
								<div className="px-4 pb-2 pt-2 lg:pt-1">
									<div className="flex items-center">
										<h4 className="mt-1 w-full font-semibold">Event Title</h4>
										<HiOutlineXCircle
											className="text-red h-6 w-6 cursor-pointer"
											onClick={(d) => setNumLinkedEvents(numLinkedEvents - 1)}
										/>
									</div>
									<input className="focus:border-green mt-2 h-10 w-full border-2 border-gray-100 bg-gray-900 outline-none focus:outline-none sm:rounded-md"></input>

									<h4 className="mt-5 font-semibold">Event Description</h4>
									<textarea className="focus:border-green mt-2 mb-2 block h-[400px] w-full resize-none border-2 border-gray-100 bg-gray-900 py-4 px-6 focus:border-2 focus:outline-none sm:rounded-lg"></textarea>
									<p className="w-100 text-green relative top-[-40px] pr-3 text-right">
										300 words
									</p>
								</div>
							</div>
						))}
						<div className="mx-6 my-4 bg-gray-800 sm:rounded-lg">
							<div className="px-4 pb-2 pt-2 lg:pt-1">
								<div className="flex items-center">
									<h4 className="w-full font-semibold">Add a linked event</h4>

									<HiOutlinePlusCircle
										className="text-green h-6 w-6 cursor-pointer"
										onClick={(d) => setNumLinkedEvents(numLinkedEvents + 1)}
									/>
								</div>
							</div>
						</div>
						<div className="mx-6 mt-20">
							<Button size="small">Post Notice</Button>
						</div>
					</div>
					<div className="col-span-12 col-start-1 flex h-full w-full flex-col md:col-span-4 md:col-start-9 lg:block">
						<div className="mx-6 my-4 bg-gray-800 sm:rounded-lg">
							<div className="px-4 pb-2 pt-2 lg:pt-1">
								<h4 className="mt-1 font-semibold">Notice Preview</h4>
								<FeedPost showActions={false}></FeedPost>
							</div>
						</div>
						<div className="mx-6 my-6">
							{!!numLinkedEvents && (
								<h4 className="mt-1 mb-4 font-semibold">Events Preview</h4>
							)}
							{new Array(numLinkedEvents).fill(0).map((d, index) => (
								<EventItem
									key={index}
									event={{
										name: 'Event Name',
										meetLink: 'asdasdasd',
									}}
								/>
							))}
						</div>
					</div>
				</div>
			</AppLayout>
		</>
	);
};

const NewPost: React.FC = () => {
	return (
		<>
			<EditPostLayout />
		</>
	);
};

// @ts-ignore
export default withApollo()(NewPost);
