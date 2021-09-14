import React from 'react';
import IconButton from '../../ui/IconButton';
import { BellIcon } from '@heroicons/react/outline';
import Avatar from '../../ui/Avatar';

interface EventItemProps {}

const EventItem: React.FC<EventItemProps> = () => {
  return (
    <>
      <div className='flex gap-3 mb-5 bg-gray-800 p-3 items-center rounded'>
        <Avatar size='xs' />
        <div className='grid flex-1 items-center gap-y-3'>
          <div className='row-start-1 row-end-3 items-center'>
            <h4 className='text-sm font-semibold'>Event name</h4>
            <a className='text-xs text-cyan hover:underline' href='#'>
              https://meet.google.com/new-meet-link
            </a>
          </div>

          <div className='col-start-2 col-end-2 text-right'>
            <p className='text-xs opacity-60 self-end '>06/09/2021 4:20 PM</p>
          </div>

          <div className='col-start-2 col-end-2 text-right'>
            <IconButton>
              <BellIcon className='h-6 w-6 text-cyan' />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventItem;
