import { XCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
import Avatar from '../../ui/Avatar';
import IconButton from '../../ui/IconButton';

const PostReminder: React.FC = () => {
  return (
    <div className='flex flex-col sm:flex-row py-3 sm:py-0 items-center sm:gap-3 px-3 relative rounded-md shadow-2xl my-3'>
      <Avatar size='xs' />
      <div className='py-4 text-center sm:text-left'>
        <div>
          <h4 className='text-sm'>Club Name</h4>
          <p className='text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            beatae
          </p>
          <Link href='/'>
            <a className='text-xs text-blue'>Add Reminder</a>
          </Link>
        </div>
      </div>

      <IconButton className='absolute top-0 right-0'>
        <XCircleIcon className='h-6 w-6 text-gray-accent' />
      </IconButton>
    </div>
  );
};

export default PostReminder;
