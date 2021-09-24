import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/outline';
import SearchBar from '../../ui/SearchBar';
import IconButton from '../../ui/IconButton';
import { TopicType } from '../../../graphql';
import ScrollBarContainer from '../../ui/ScrollBar';

interface TopicsModalProps {
	isOpen: boolean;
	onClose: () => void;
	onListItemClick: (topic: TopicType) => void;
	selectedTags: TopicType[];
}

const DUMMY_DATA = [
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

const TopicsModal: React.FC<TopicsModalProps> = ({
	isOpen,
	onClose,
	onListItemClick,
	selectedTags,
}) => {
	return (
		<>
			<Transition appear show={isOpen} as={React.Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={onClose}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={React.Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
						</Transition.Child>

						<span
							className="inline-block h-screen align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={React.Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div className="bg-gray-900 text-white inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
								<Dialog.Title
									as="h3"
									className="text-xl font-medium leading-6 "
								>
									Add Departments
								</Dialog.Title>
								<div className="my-4">
									<SearchBar />
								</div>

								<div>
									<ScrollBarContainer className="overflow-y-scroll h-[400px] px-5">
										{DUMMY_DATA.map((topic) => {
											return (
												<li className="mb-2" key={topic._id}>
													<div className="flex justify-between items-center">
														<span>{topic.name}</span>
														<IconButton
															onClick={() => onListItemClick(topic as any)}
															className="hover:text-cyan"
														>
															{!!selectedTags.find(
																(el) => el._id === topic._id
															) ? (
																<XCircleIcon className="h-6 text-red" />
															) : (
																<PlusCircleIcon className="h-6 text-cyan" />
															)}
														</IconButton>
													</div>
												</li>
											);
										})}
									</ScrollBarContainer>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default TopicsModal;
