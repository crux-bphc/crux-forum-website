import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';
import Button from '../../ui/Button';
import FeedClubTag from '../../ui/FeedClubTag';

const RightSideBar: React.FC = () => {
  const clubs = [
    'new club xyz',
    'Similar suggestions?',
    'new association xyz',
    'club xyz',
  ];

  const colors = ['red', 'purple', 'cyan', 'blue'];

  return (
    <div className='px-8 py-8'>
      {/* post button */}
      <div className='mt-2'>
        <Button color='cyan' className='w-full'>
          Post Now
        </Button>
      </div>

      {/* following tags */}
      <div className='mt-8'>
        <h3 className='text-xl mb-3 font-semibold'>Following</h3>
        <div className='mb-6'>
          <div className='mb-2'>
            {Array(4)
              .fill(0)
              .map((_, i) => {
                return (
                  <div key={i} className='mr-2 inline-block mb-2'>
                    <FeedClubTag
                      name={clubs[Math.floor(Math.random() * 4)]}
                      className='text-xs'
                      color={colors[Math.floor(Math.random() * 4)]}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <hr className='border border-gray-disabled mb-5' />

      {/* explore section */}

      <div>
        <div className='flex justify-between items-center mb-5'>
          <h3 className='text-xl font-semibold'>Explore</h3>
          <button>
            <SearchIcon className='text-cyan w-4 h-4' />
          </button>
        </div>

        <div className='mb-6'>
          <div className='mb-2'>
            {Array(10)
              .fill(0)
              .map((_, i) => {
                return (
                  <div key={i} className='mr-2 inline-block mb-2'>
                    <FeedClubTag
                      name={clubs[Math.floor(Math.random() * 4)]}
                      className='text-xs'
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
