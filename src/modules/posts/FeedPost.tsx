import React from 'react';
import Avatar from '../../ui/Avatar';
import FeedClubTag from '../../ui/FeedClubTag';
import { ChatAltIcon, ThumbUpIcon } from '@heroicons/react/outline';
import PostGallery from './PostGallery';
import IconButton from '../../ui/IconButton';
import { DotsHorizontalIcon } from '@heroicons/react/solid';

import PostReminder from './PostReminder';

const FeedPost: React.FC = () => {
  const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200/300',
  ];

  return (
    <div className='bg-gray-800 px-4 pb-2 pt-4 lg:pt-1 rounded-lg relative'>
      <div className='relative'>
        {/* post header   */}
        <div className='flex items-center lg:items-end justify-between'>
          <div className='flex gap-2'>
            <Avatar size='xs' />
            <div>
              <h4 className='text-sm font-semibold'>John Smith</h4>
              <p className='text-xs font-light'>10 mins ago</p>
            </div>
          </div>

          <div className='text-right'>
            <IconButton className=''>
              <DotsHorizontalIcon className='w-4 h-4 text-cyan' />
            </IconButton>
            <div className='gap-2 hidden lg:flex'>
              <FeedClubTag name='cRuX' color='red' />
              <FeedClubTag name='IEEE' color='blue' />
              <FeedClubTag name='Automation and Robotics' color='purple' />
            </div>
          </div>
        </div>
        <div className='gap-2 flex lg:hidden mt-3'>
          <FeedClubTag name='cRuX' color='red' />
          <FeedClubTag name='IEEE' color='blue' />
          <FeedClubTag name='Automation and Robotics' color='purple' />
        </div>

        {/* text */}
        <div className='my-4'>
          <p className='text-sm font-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            tempor arcu. Nulla facilisi. Phasellus sapien risus, auctor feugiat
            lorem vitae, vulputate euismod nulla. Proin laoreet odio condimentum
            turpis bibendum, vitae luctus sapien pulvinar. Mauris vitae suscipit
            odio. Etiam rhoncus luctus quam eget condimentum. Fusce quis elit
            sed turpis porttitor euismod.
          </p>
        </div>

        {/* pictures */}
        <PostGallery images={images} />

        {/* post actions */}
        <div className='mt-2'>
          {/* reactions count */}
          <div className='flex items-center justify-between py-1 px-2'>
            <p className='font-light text-sm'>12 likes</p>
            <p className='font-light text-sm'>15 comments</p>
          </div>

          {/* reminder */}

          <PostReminder />

          {/* <hr className='border border-gray-disabled mb-2 mt-0.5' /> */}

          {/* reaction buttons */}
          <div className='grid grid-cols-2'>
            <button className='flex items-center justify-center py-1'>
              <span className='mr-1'>
                <ThumbUpIcon className='inline h-5 w-5 text-cyan' />
              </span>
              <span className='text-sm'>Like</span>
            </button>
            <button className='flex items-center justify-center py-1'>
              <span className='mr-1'>
                <ChatAltIcon className='inline h-5 w-5 text-cyan' />
              </span>
              <span className='text-sm'>Comment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;