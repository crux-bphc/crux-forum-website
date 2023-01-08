import React from 'react';
import Input from "@/shared/ui/Input";
import TextArea from "@/shared/ui/TextArea";
import { HiOutlineXCircle } from "react-icons/hi";
import BoundingBox from '../BoundingBox';

interface LinkedEvent {
	title: string,
	date: string,
	venue: string,
	description: string
}

interface EventInputProps {
    currentEvent: LinkedEvent
    onDelete: () => void,
    updateTitle: (value: string) => void,
    updateDate: (value: string) => void,
    updateDescription: (value: string) => void,
    updateVenue: (value: string) => void,
}

const EventInput: React.FC<EventInputProps> = ({onDelete, updateDate, updateDescription, updateTitle, updateVenue, currentEvent}) => {
    return (
        <BoundingBox>
            <div className="flex items-center">
                <h4 className="mt-1 w-full font-semibold">Event Title</h4>
                <HiOutlineXCircle 
                    className="text-red-400 h-6 w-6 cursor-pointer"
                    onClick={() => onDelete()}
                />
            </div>
            {/* Event Title Input */}
            <Input 
                className="mt-2"
                value={currentEvent.title}
                onChange={(e) => updateTitle(e.target.value)}
            />

            <h4 className="mt-5 font-semibold">Event Description</h4>
            <TextArea 
                value={currentEvent.description}
                setText={updateDescription} 
                charLimit={300}
                height={400}
            />

            <h4 className="font-semibold">Event Venue</h4>
            <Input 
                className="mt-2"
                value={currentEvent.venue}
                onChange={(e) => updateVenue(e.target.value)}
            />

            <h4 className="mt-5 font-semibold">Event Date</h4>
            <Input 
                className="mt-2"
                value={currentEvent.date}
                onChange={(e) => updateDate(e.target.value)}
            />


        </BoundingBox>
    )
}

export default EventInput;