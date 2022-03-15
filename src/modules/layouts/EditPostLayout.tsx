import React from 'react';

import useDisclosure from '../hooks/useDisclosure';

import AppLayout from './AppLayout';

import { TopicType } from '../../../graphql';
import TopicsModal from '../topics/TopicsModal';
import Button from '../../ui/Button';
import ClubTag from '../../ui/ClubTag';

import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import FeedPost from '../posts/FeedPost';
import EventItem from '../events/EventItem';

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
		if (!!selectedTags.find((el) => el._id === topic._id)) {
			const updatedTags = selectedTags.filter((el) => el._id !== topic._id);
			console.log(updatedTags);
			setSelectedTags(updatedTags);
		} else {
			setSelectedTags([...selectedTags, topic]);
		}
	};

	return (
		<>
			<TopicsModal
				tags={DUMMY_DATA}
				{...{ isOpen, onClose, onListItemClick, selectedTags }}
			></TopicsModal>
			<AppLayout>
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-8 w-full h-full block">
						<div className="bg-gray-800 sm:rounded-lg mx-6 my-4">
							<div className="px-4 pb-2 pt-2 lg:pt-1">
								<h4 className="font-semibold mt-1">Notice Content</h4>
								<textarea className="bg-gray-900 w-full resize-none block mt-3 mb-2 h-[400px] sm:rounded-lg border-gray-100 border-2 focus:outline-none focus:border-green focus:border-2 py-4 px-6"></textarea>
								<p className="w-100 text-right relative top-[-40px] pr-3 text-green">
									300 words
								</p>
							</div>
						</div>
						<div className="bg-gray-800 sm:rounded-lg mx-6 my-4">
							<div className="px-4 pb-2 pt-2 lg:pt-1">
								<h4 className="font-semibold mt-1">Tag Your Notice</h4>
								<div className="flex items-center">
									<div className="w-full my-3">
										{!!selectedTags.length && (
											<div className="items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
												{selectedTags.map((tag) => {
													return (
														<ClubTag
															key={tag._id}
															variant="display"
															name={tag.name}
															color={'purple'}
															onClick={() => {}}
														/>
													);
												})}
											</div>
										)}
									</div>
									<PlusCircleIcon
										className="h-[25px] text-green cursor-pointer"
										onClick={onOpen}
									></PlusCircleIcon>
								</div>
							</div>
						</div>
						{new Array(numLinkedEvents).fill(0).map((d, index) => (
							<div key={index} className="bg-gray-800 sm:rounded-lg mx-6 my-4">
								<div className="px-4 pb-2 pt-2 lg:pt-1">
									<div className="flex items-center">
										<h4 className="font-semibold mt-1 w-full">Event Title</h4>
										<XCircleIcon
											className="h-[25px] text-red cursor-pointer"
											onClick={(d) => setNumLinkedEvents(numLinkedEvents - 1)}
										></XCircleIcon>
									</div>
									<input className="mt-2 w-full border-gray-100 border-2 outline-none focus:outline-none focus:border-green bg-gray-900 sm:rounded-md h-10"></input>

									<h4 className="font-semibold mt-5">Event Description</h4>
									<textarea className="bg-gray-900 w-full resize-none block mt-2 mb-2 h-[400px] sm:rounded-lg border-gray-100 border-2 focus:outline-none focus:border-green focus:border-2 py-4 px-6"></textarea>
									<p className="w-100 text-right relative top-[-40px] pr-3 text-green">
										300 words
									</p>
								</div>
							</div>
						))}
						<div className="bg-gray-800 sm:rounded-lg mx-6 my-4">
							<div className="px-4 pb-2 pt-2 lg:pt-1">
								<div className="flex items-center">
									<h4 className="font-semibold w-full">Add a linked event</h4>
									<PlusCircleIcon
										className="h-[25px] text-green cursor-pointer"
										onClick={(d) => setNumLinkedEvents(numLinkedEvents + 1)}
									></PlusCircleIcon>
								</div>
							</div>
						</div>
						<div className="mx-6 mt-20">
							<Button size="sm">Post Notice</Button>
						</div>
					</div>
					<div className="col-start-1 col-span-12 md:col-start-9 md:col-span-4 w-full h-full lg:block flex flex-col">
						<div className="bg-gray-800 sm:rounded-lg mx-6 my-4">
							<div className="px-4 pb-2 pt-2 lg:pt-1">
								<h4 className="font-semibold mt-1">Notice Preview</h4>
								<FeedPost showActions={false}></FeedPost>
							</div>
						</div>
						<div className="mx-6 my-6">
							{!!numLinkedEvents && (
								<h4 className="font-semibold mt-1 mb-4">Events Preview</h4>
							)}
							{new Array(numLinkedEvents).fill(0).map((d, index) => (
								<EventItem
									key={index}
									event={{
										name: 'Event Name',
										meetLink: 'asdasdasd',
									}}
								></EventItem>
							))}
						</div>
					</div>
				</div>
			</AppLayout>
		</>
	);
};

export default EditPostLayout;
