import React from 'react';
import Input from '@/shared/ui/Input';
import TextArea from '@/shared/ui/TextArea';
import { HiOutlineXCircle } from 'react-icons/hi';
import BoundingBox from '../BoundingBox';

interface LinkedEvent {
	title: string;
	date: string;
	venue: string;
	description: string;
	meetLink: string;
}

interface EventInputProps {
	currentEvent: LinkedEvent;
	onDelete: () => void;
	updateTitle: (value: string) => void;
	updateDate: (value: string) => void;
	updateDescription: (value: string) => void;
	updateVenue: (value: string) => void;
	updateLink: (value: string) => void;
}

const EventInput: React.FC<EventInputProps> = ({
	onDelete,
	updateDate,
	updateDescription,
	updateTitle,
	updateVenue,
	updateLink,
	currentEvent,
}) => {
	// Can automate the entire thing. too much repetition

	return (
		<BoundingBox>
			<div className="mt-3 flex items-center justify-between">
				<h4 className="font-semibold">New Linked Event</h4>
				<HiOutlineXCircle
					className="h-6 w-6 cursor-pointer text-red-400"
					onClick={() => onDelete()}
				/>
			</div>

			<div className="mt-5 flex items-center">
				<div className="flex w-1/2 flex-col items-start pr-5">
					<h4 className="font-semibold">Event Title</h4>
					<Input
						className="mt-2"
						value={currentEvent.title}
						onChange={(e) => updateTitle(e.target.value)}
					/>
				</div>

				<div className="flex w-1/2 flex-col items-start pr-5">
					<h4 className="font-semibold">Event Date</h4>
					<Input
						className="mt-2"
						value={currentEvent.date}
						onChange={(e) => updateDate(e.target.value)}
					/>
				</div>
			</div>
			{/* Event Title Input */}

			<div className="mt-3 flex items-center">
				<div className="flex w-1/2 flex-col items-start pr-5">
					<h4 className="font-semibold">Event Venue</h4>
					<Input
						className="mt-2"
						value={currentEvent.venue}
						onChange={(e) => updateVenue(e.target.value)}
					/>
				</div>

				<div className="flex w-1/2 flex-col items-start pr-5">
					<h4 className="font-semibold">Event Link</h4>
					<Input
						className="mt-2"
						value={currentEvent.meetLink}
						onChange={(e) => updateLink(e.target.value)}
					/>
				</div>
			</div>

			<div className="w-1/2 pr-5">
				<h4 className="mt-5 font-semibold">Event Description</h4>
				<TextArea
					value={currentEvent.description}
					setText={updateDescription}
					charLimit={300}
					height={200}
				/>
			</div>
		</BoundingBox>
	);
};

export default EventInput;
