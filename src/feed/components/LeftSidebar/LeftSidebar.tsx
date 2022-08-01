import EventItem from '@/shared/components/EventItem';
import ReverseStackIcon from '@/shared/ui/Icons/ReverseStackIcon';
import Input from '@/shared/ui/Input';
import React from 'react';

const LeftSideBar: React.FC = () => {
	const testEvent = {
		meetLink: 'https://katelin.name',
		name: 'cross-platform',
		__typename: 'EventType',
	};

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
						{Array(4)
							.fill(0)
							.map((_, i) => {
								return (
									<EventItem event={testEvent} key={i} bottomBorder={i != 3} />
								);
							})}
					</div>
				</div>
				<div className="mb-3 overflow-scroll">
					<h3 className="mb-3 text-xl font-semibold">Other Events</h3>
					<div className="pr-2 md:h-[250px]">
						{Array(4)
							.fill(0)
							.map((_, i) => {
								return (
									<EventItem event={testEvent} key={i} bottomBorder={i != 3} />
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSideBar;
