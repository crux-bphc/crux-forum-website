import React from 'react';
import ReverseStackIcon from '../../ui/icons/ReverseStackIcon';
import SearchBar from '../../ui/SearchBar';
import EventItem from '../events/EventItem';

const LeftSideBar: React.FC = () => {
  return (
    <div className='px-5 py-8 border-r-2 border-gray-800'>
      <div>
        <h2 className='text-4xl font-semibold'>Upcoming Events</h2>
        <div className='my-4 flex justify-between'>
          <SearchBar className='w-3/5' />
          <button className='text-cyan'>
            <ReverseStackIcon className='w-7 h-7' />
          </button>
        </div>
      </div>
      <div>
        <div className='mb-3'>
          <h3 className='text-xl mb-3 font-semibold'>My Events</h3>
          <div className='md:h-[250px] pb-5 pr-2 md:overflow-y-scroll'>
            {Array(4)
              .fill(0)
              .map((_, i) => {
                return <EventItem key={i} />;
              })}
          </div>
        </div>
        <div className='mb-3'>
          <h3 className='text-xl mb-3 font-semibold'>Other Events</h3>
          <div className='md:h-[250px] pb-5 pr-2 md:overflow-y-scroll'>
            {Array(4)
              .fill(0)
              .map((_, i) => {
                return <EventItem key={i} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
