import React from 'react';
import IconButton from '../../ui/IconButton';
import Avatar from '../../ui/Avatar';
import { HiOutlineBell, HiOutlineLink } from 'react-icons/hi';
import { BiBellOff } from 'react-icons/bi';
import { BiMap } from 'react-icons/bi';
import Link from '@/shared/ui/Link';

interface EventItemProps {
	bottomBorder?: boolean;
	shadow?: boolean;
	subscribed?: boolean;
	event: {
		name: string;
		meetLink: string;
		date: string;
		venue: string;
		description?: string;
	};
	onToggleSubscription?: () => void;
}

const EventItem: React.FC<EventItemProps> = ({
	bottomBorder = true,
	shadow = false,
	event: { name, meetLink, date, venue, description = '' },
	onToggleSubscription = () => {},
	subscribed = false,
}) => {
	return (
		<>
			<div
				data-testid="event-item"
				className={`flex gap-3 ${bottomBorder ? 'mb-5' : ''} ${
					shadow ? 'shadow-2xl' : ''
				} items-center rounded bg-gray-800 p-3`}
			>
				<Avatar size="x-small" />
				<div className="grid flex-1 items-center gap-y-3">
					<div className="row-start-1 row-end-3 items-center">
						<h4 className="font-semibold lg:text-sm">{name}</h4>
						<p className="mb-3">{description}</p>
						{/* Venue and Meet Link */}
						<div className="grid grid-cols-2">
							<div className="flex-start flex">
								<BiMap className="mr-2 h-5 w-5 text-teal-500" />
								<p>{venue}</p>
							</div>
							{meetLink && (
								<div className="flex-start flex">
									<HiOutlineLink className="mr-2 h-5 w-5 text-teal-500" />
									<Link href={meetLink}>Meet Link</Link>
								</div>
							)}
						</div>
					</div>

					<div className="col-start-2 col-end-2 text-right">
						<p className="self-end text-xs opacity-60 ">{date}</p>
					</div>

					<div className="col-start-2 col-end-2 flex justify-end">
						<IconButton
							variant="text"
							icon={
								subscribed ? (
									<HiOutlineBell className="text-cyan-500 h-5 w-5" />
								) : (
									<BiBellOff className="h-5 w-5 text-white opacity-60"></BiBellOff>
								)
							}
							className="block p-0"
							onClick={() => onToggleSubscription()}
						></IconButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventItem;
