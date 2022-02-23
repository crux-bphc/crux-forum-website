import React from 'react';
import IconButton from '../../ui/IconButton';
import { BellIcon } from '@heroicons/react/outline';
import Avatar from '../../ui/Avatar';
import { EventType } from '../../../graphql';

interface EventItemProps {
	bottomBorder?: boolean;
	event: {
		name: string;
		description: string;
		meetLink: string;
	};
}

const EventItem: React.FC<EventItemProps> = ({
	bottomBorder = true,
	event: { name, description, meetLink },
}) => {
	return (
		<>
			<div
				data-testid="event-item"
				className={`flex gap-3 ${
					bottomBorder ? 'mb-5' : ''
				} bg-gray-800 p-3 items-center rounded`}
			>
				<Avatar size="xs" />
				<div className="grid flex-1 items-center gap-y-3">
					<div className="row-start-1 row-end-3 items-center">
						<h4 className="text-sm font-semibold">{name}</h4>
						<p className="text-xs">{description}</p>
						<a className="text-xs text-cyan hover:underline" href="#">
							{meetLink}
						</a>
					</div>

					<div className="col-start-2 col-end-2 text-right">
						<p className="text-xs opacity-60 self-end ">06/09/2021 4:20 PM</p>
					</div>

					<div className="col-start-2 col-end-2 text-right">
						<IconButton className="p-0">
							<BellIcon className="h-5 w-5 text-cyan" />
						</IconButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventItem;
