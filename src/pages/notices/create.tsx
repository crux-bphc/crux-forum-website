import { PlusCircleIcon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { TopicType } from '../../../graphql';
import EventItem from '../../modules/events/EventItem';
import useDisclosure from '../../modules/hooks/useDisclosure';
import AppLayout from '../../modules/layouts/AppLayout';
import FeedPost from '../../modules/posts/FeedPost';
import TopicsModal from '../../modules/topics/TopicsModal';
import Button from '../../ui/Button';
import ClubTag from '../../ui/ClubTag';
import FeedClubTag from '../../ui/FeedClubTag';
import FormInput from '../../ui/FormInput';
import IconButton from '../../ui/IconButton';

const DUMMY_DATA: any = [
	{
		_id: '614c8f08fe60d017770f5ebd',
		name: 'Quire',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ebe',
		name: 'Brainbox',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ebf',
		name: 'Yata',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec0',
		name: 'Izio',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec1',
		name: 'Browsedrive',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec2',
		name: 'Skyba',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec3',
		name: 'Roodel',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec4',
		name: 'Feedmix',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec5',
		name: 'Midel',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec6',
		name: 'Teklist',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec7',
		name: 'Linkbuzz',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec8',
		name: 'Eabox',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ec9',
		name: 'Skyba',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5eca',
		name: 'Livepath',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ecb',
		name: 'Kwimbee',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ecc',
		name: 'Voonder',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ecd',
		name: 'Flipbug',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ece',
		name: 'Vimbo',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ecf',
		name: 'Ainyx',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed0',
		name: 'Omba',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed1',
		name: 'Aimbo',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed2',
		name: 'Oozz',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed3',
		name: 'Pixoboo',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed4',
		name: 'Livefish',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed5',
		name: 'Twimm',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed6',
		name: 'Tazz',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed7',
		name: 'Zoozzy',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed8',
		name: 'Skinix',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5ed9',
		name: 'Avamm',
		color: 'cyan',
	},
	{
		_id: '614c8f08fe60d017770f5eda',
		name: 'Blogtags',
		color: 'cyan',
	},
];

interface NewNoticeProps {}

type EventType = {
	title: string;
	description: string;
	meetLink: string;
};

type NoticeType = {
	content: string;
	tags: [];
};

const NewNotice: React.FC<NewNoticeProps> = ({}) => {
	const [notice, setNotice] = useState<NoticeType>({ content: '', tags: [] });
	const [events, setEvents] = useState<EventType[]>([]);
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [selectedTags, setSelectedTags] = React.useState<TopicType[]>([]);

	const onListItemClick = (topic: TopicType) => {
		if (!!selectedTags.find((el) => el._id === topic._id)) {
			const updatedTags = selectedTags.filter((el) => el._id !== topic._id);
			setSelectedTags(updatedTags);
		} else {
			setSelectedTags([...selectedTags, topic]);
		}
	};

	return (
		<AppLayout>
			<TopicsModal
				tags={DUMMY_DATA}
				{...{ isOpen, onClose, onListItemClick, selectedTags }}
			/>
			<pre>{JSON.stringify(events, null, 4)}</pre>
			<div className="px-6">
				<div className="grid grid-cols-3 gap-6">
					<div className="col-start-1 col-end-3">
						<div>
							<div className="bg-gray-800 my-5 p-2 rounded-md">
								<Formik
									onSubmit={(values, { setSubmitting }) => {
										setTimeout(() => {
											alert(JSON.stringify(values, null, 2));
											setSubmitting(false);
										}, 400);
									}}
									initialValues={{}}
								>
									{({ values, handleChange }) => {
										return (
											<Form autoComplete="off">
												<FormInput
													name={'Notice Content'}
													label="Notice Content"
													onChange={(e) => {
														handleChange(e);
														setNotice((prev) => {
															return { ...prev, content: e.target.value };
														});
													}}
												/>
											</Form>
										);
									}}
								</Formik>
							</div>
							<div className="bg-gray-800 my-5 p-2 rounded-md">
								<h5>Tag your Notice</h5>
								<Button
									icon={<SearchIcon className="h-5" />}
									size="sm"
									variant="cyan"
									onClick={onOpen}
								>
									Search...
								</Button>
								<div className="flex items-center gap-2 my-1">
									{selectedTags.map((tag, idx) => (
										<FeedClubTag key={idx} name={tag.name} color={tag.color} />
									))}
								</div>
							</div>
							<div className="bg-gray-800 my-5 p-2 rounded-md flex items-center justify-between">
								<h5>New Linked Event</h5>
								<IconButton
									onClick={() =>
										setEvents((prevEvents) => [
											...prevEvents,
											{ title: '', description: '', meetLink: '' },
										])
									}
								>
									<PlusCircleIcon className="h-7 w-7 text-cyan" />
								</IconButton>
							</div>
						</div>
						<div>
							{events.map((event, idx) => {
								return (
									<div key={idx}>
										<IconButton
											onClick={() => setEvents((prev) => prev.splice(idx, 1))}
										>
											<XIcon className="h-7 w-7 text-red" />
										</IconButton>
										<Formik
											onSubmit={(values, { setSubmitting }) => {
												setTimeout(() => {
													alert(JSON.stringify(values, null, 2));
													setSubmitting(false);
												}, 400);
											}}
											initialValues={{}}
										>
											{({ values, handleChange }) => {
												return (
													<Form autoComplete="off">
														<FormInput
															name={'title_' + idx}
															label="Event Title"
															onChange={(e) => {
																handleChange(e);
																setEvents((prev) => {
																	const newEvents = [...prev];
																	newEvents[idx].title = e.target.value;
																	return newEvents;
																});
															}}
														/>
														<FormInput
															name={'description_' + idx}
															label="Event Description"
															onChange={(e) => {
																handleChange(e);
																setEvents((prev) => {
																	const newEvents = [...prev];
																	newEvents[idx].description = e.target.value;
																	return newEvents;
																});
															}}
														/>
														<FormInput
															name={'meetlink_' + idx}
															label="Event Meet Link"
															onChange={(e) => {
																handleChange(e);
																setEvents((prev) => {
																	const newEvents = [...prev];
																	newEvents[idx].meetLink = e.target.value;
																	return newEvents;
																});
															}}
														/>
														<Button type="submit" color="cyan">
															Submit
														</Button>
													</Form>
												);
											}}
										</Formik>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<div>
							<div className="bg-gray-800 my-5 p-2 rounded-md">
								<h5>Preview Notice</h5>
								<FeedPost content={notice.content} tags={selectedTags} />
								{/* <FeedPost content={notice.content} images={notice.images} /> */}
							</div>
							<div>
								<h1>Preview Events</h1>
								{events.map((event, idx) => (
									<EventItem
										key={idx}
										event={{
											name: event.title,
											description: event.description,
											meetLink: event.meetLink,
										}}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
				<Button color="cyan">Post Notice</Button>
			</div>
		</AppLayout>
	);
};

export default NewNotice;
