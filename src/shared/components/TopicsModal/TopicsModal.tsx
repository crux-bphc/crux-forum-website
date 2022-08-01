import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiOutlinePlusCircle, HiOutlineXCircle } from 'react-icons/hi';
import IconButton from '@/shared/ui/IconButton';
import Input from '@/shared/ui/Input';
import { Topic } from '@/shared/types/topic';

interface TopicsModalProps {
	isOpen: boolean;
	onClose: () => void;
	onListItemClick: (topic: Topic) => void;
	selectedTags: Topic[];
	tags: Topic[];
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
							<div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle text-white shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-xl font-medium leading-6 "
								>
									Add Departments
								</Dialog.Title>
								<div className="my-4">
									<Input />
								</div>

								<div>
									<div className="h-[400px] overflow-y-scroll px-5">
										{tags.map((topic, i) => {
											return (
												<li className="mb-2" key={topic._id}>
													<div className="flex items-center justify-between">
														<span>{topic.name}</span>
														<IconButton
															color="blue"
															variant="text"
															icon={
																<>
																	{selectedTags.find(
																		(el) => el._id === topic._id
																	) ? (
																		<HiOutlineXCircle
																			color="red"
																			size={20}
																			data-testid={`xcircle-icon-btn-${i}`}
																		/>
																	) : (
																		<HiOutlinePlusCircle
																			data-testid={`pluscircle-icon-btn-${i}`}
																			color="teal"
																			size={20}
																		/>
																	)}
																</>
															}
															onClick={() => onListItemClick(topic)}
															className="hover:text-cyan"
														/>
													</div>
												</li>
											);
										})}
									</div>
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
