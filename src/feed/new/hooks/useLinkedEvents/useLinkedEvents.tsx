import React from 'react';

interface LinkedEvent {
	title: string;
	date: string;
	venue: string;
	description: string;
	meetLink: string;
}

const useLinkedEvents = () => {
	const [linkedEvents, setLinkedEvents] = React.useState<LinkedEvent[]>([]);

	const addEvent = () => {
		const newEvent: LinkedEvent = {
			title: '',
			date: '',
			venue: '',
			description: '',
			meetLink: '',
		};
		setLinkedEvents([...linkedEvents, newEvent]);
	};

	const updateTitle = (index: number, newTitle: string) => {
		setLinkedEvents(
			linkedEvents.map((e, i) => {
				if (index == i) {
					e.title = newTitle;
				}

				return e;
			})
		);
	};

	const updateDescription = (index: number, newDescription: string) => {
		setLinkedEvents(
			linkedEvents.map((e, i) => {
				if (index == i) {
					e.description = newDescription;
				}

				return e;
			})
		);
	};

	const updateLink = (index: number, newLink: string) => {
		setLinkedEvents(
			linkedEvents.map((e, i) => {
				if (index == i) {
					e.meetLink = newLink;
				}

				return e;
			})
		);
	};

	const updateDate = (index: number, newDate: string) => {
		setLinkedEvents(
			linkedEvents.map((e, i) => {
				if (index == i) {
					e.date = newDate;
				}

				return e;
			})
		);
	};

	const updateVenue = (index: number, newVenue: string) => {
		setLinkedEvents(
			linkedEvents.map((e, i) => {
				if (index == i) {
					e.venue = newVenue;
				}

				return e;
			})
		);
	};

	const deleteEvent = (index: number) => {
		setLinkedEvents(linkedEvents.filter((e, i) => index != i));
	};

	return {
		linkedEvents,
		addEvent,
		updateTitle,
		updateDate,
		updateDescription,
		updateVenue,
		updateLink,
		deleteEvent,
	};
};

export default useLinkedEvents;
