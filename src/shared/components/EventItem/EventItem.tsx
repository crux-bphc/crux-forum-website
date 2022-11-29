import React from 'react';
import IconButton from '../../ui/IconButton';
import Avatar from '../../ui/Avatar';
import { HiOutlineBell, HiOutlineLink, HiOutlineMap } from 'react-icons/hi';
import {BiMap} from 'react-icons/bi'
import Link from '@/shared/ui/Link';

interface EventItemProps {
	bottomBorder?: boolean;
	shadow?: boolean;
	event: {
		name: string;
		meetLink: string;
		date: string;
		venue: string;
		description: string;
	};
}

const EventItem: React.FC<EventItemProps> = ({
	bottomBorder = true,
	shadow = false,
	event: { name, meetLink, date, venue, description},
}) => {
	return (
		<>
			<div
				data-testid="event-item"
				className={`flex gap-3 ${
					bottomBorder ? 'mb-5' : ''
				} ${shadow? 'shadow-2xl' : ''} items-center rounded bg-gray-800 p-3`}
			>
				<Avatar size="x-small" />
				<div className="grid flex-1 items-center gap-y-3">
					<div className="row-start-1 row-end-3 items-center">
						<h4 className="font-semibold lg:text-sm">{name}</h4>
						<p className="mb-3">{description}</p>
						{/* Venue and Meet Link */}
						<div className="grid grid-cols-2">
							<div className="flex flex-start">
								<BiMap className="text-teal-500 h-5 w-5 mr-2"/>
								<p>{venue}</p>
							</div>
							{meetLink &&
							<div className="flex flex-start">
								<HiOutlineLink className="text-teal-500 h-5 w-5 mr-2"/>
								<Link href={meetLink}>Meet Link</Link>
							</div>}
						</div>
					</div>

					<div className="col-start-2 col-end-2 text-right">
						<p className="self-end text-xs opacity-60 ">{date}</p>
					</div>

					<div className="col-start-2 col-end-2 flex justify-end">
						<IconButton
							variant="text"
							icon={
								<>
									<HiOutlineBell className="text-cyan-500 h-5 w-5" />
								</>
							}
							className="block p-0"
						></IconButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventItem;
