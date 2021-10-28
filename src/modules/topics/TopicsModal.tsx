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
	tags: TopicType[];
}

const TopicsModal: React.FC<TopicsModalProps> = ({
	isOpen,
	onClose,
	onListItemClick,
	selectedTags,
	tags,
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
										{tags.map((topic, i) => {
											return (
												<li className="mb-2" key={topic._id}>
													<div className="flex justify-between items-center">
														<span>{topic.name}</span>
														<IconButton
															data-testid={`modal-icon-btn-${i}`}
															onClick={() => onListItemClick(topic as any)}
															className="hover:text-cyan"
														>
															{!!selectedTags.find(
																(el) => el._id === topic._id
															) ? (
																<XCircleIcon
																	data-testid={`xcircle-icon-btn-${i}`}
																	className="h-6 text-red"
																/>
															) : (
																<PlusCircleIcon
																	data-testid={`pluscircle-icon-btn-${i}`}
																	className="h-6 text-cyan"
																/>
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
