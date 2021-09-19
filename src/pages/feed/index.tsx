import React from 'react';
import FeedLayout from '../../modules/layouts/FeedLayout';
import FeedPost from '../../modules/posts/FeedPost';
import SearchBar from '../../ui/SearchBar';

const Home: React.FC = () => {
  return (
    <>
      <FeedLayout>
        <div className='px-3 py-3 sm:px-8 sm:py-8'>
          <div className='grid grid-cols-2 gap-y-4'>
            <h1 className='col-span-full text-4xl font-semibold'>Feed</h1>
            <SearchBar className='col-span-full sm:col-span-1' />
            <div className='col-span-full sm:col-span-1 sm:text-right'>
              <p>
                Sort by <span className='font-bold'>Popular</span>
              </p>
            </div>
          </div>
          <div className='mt-8 flex flex-col gap-8'>
            <FeedPost />
            <FeedPost />
          </div>
        </div>
      </FeedLayout>
    </>
  );
};

export default Home;
