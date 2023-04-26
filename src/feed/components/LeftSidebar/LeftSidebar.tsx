import React from 'react';

import EventItem from '@/shared/components/EventItem';
import ReverseStackIcon from '@/shared/ui/Icons/ReverseStackIcon';
import Input from '@/shared/ui/Input';

import { Event } from '@/shared/types/event';

export interface LeftSideBarProps {
	subscribedEvents?: Event[];
	otherEvents?: Event[];
	subscribe: (event: Event) => void;
	unsubscribe: (event: Event) => void;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({
	subscribedEvents = [],
	otherEvents = [],
	subscribe,
	unsubscribe,
}) => {
	return (
		<div className="border-r-2 border-gray-800 px-5 py-8">
			<div>
				<h2 className="text-2xl font-semibold lg:text-4xl">Upcoming Events</h2>
				<div className="my-4 flex justify-between">
					<Input placeholder={'Search....'} className="!w-10/12" />

					<button className="text-cyan">
						<ReverseStackIcon className="h-7 w-7" />
					</button>
				</div>
			</div>
			<div>
				<div className="mb-3 overflow-scroll">
					<h3 className="mb-5 text-xl font-semibold">My Events</h3>
					<div className="pr-2 md:h-[250px]">
						{subscribedEvents?.map((event, index) => (
							<EventItem
								event={event}
								key={event._id}
								bottomBorder={index != subscribedEvents?.length - 1}
								subscribed
								onToggleSubscription={() => unsubscribe(event)}
							></EventItem>
						))}
					</div>
				</div>
				<div className="mb-3 overflow-scroll">
					<h3 className="mb-3 text-xl font-semibold">Other Events</h3>
					<div className="pr-2 md:h-[250px]">
						{/*TODO: Move this to backend */}
						{otherEvents
							?.filter(
								(event) =>
									subscribedEvents.find(
										(userEvent) => userEvent._id === event._id
									) === undefined
							)
							.map((event, index) => (
								<EventItem
									event={event}
									key={event._id}
									bottomBorder={index != otherEvents.length - 1}
									onToggleSubscription={() => subscribe(event)}
								></EventItem>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSideBar;
