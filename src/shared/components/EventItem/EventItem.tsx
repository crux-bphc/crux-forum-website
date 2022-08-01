import React from 'react';
import IconButton from '../../ui/IconButton';
import Avatar from '../../ui/Avatar';
import { HiOutlineBell } from 'react-icons/hi';
import Link from '@/shared/ui/Link';

interface EventItemProps {
	bottomBorder?: boolean;
	event: {
		name: string;
		meetLink: string;
	};
}

const EventItem: React.FC<EventItemProps> = ({
	bottomBorder = true,
	event: { name, meetLink },
}) => {
	return (
		<>
			<div
				data-testid="event-item"
				className={`flex gap-3 ${
					bottomBorder ? 'mb-5' : ''
				} items-center rounded bg-gray-800 p-3`}
			>
				<Avatar size="x-small" />
				<div className="grid flex-1 items-center gap-y-3">
					<div className="row-start-1 row-end-3 items-center">
						<h4 className="font-semibold lg:text-sm">{name}</h4>
						<Link href="#">{meetLink}</Link>
					</div>

					<div className="col-start-2 col-end-2 text-right">
						<p className="self-end text-xs opacity-60 ">06/09/2021 4:20 PM</p>
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
