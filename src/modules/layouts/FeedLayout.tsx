import React from 'react';
import AppLayout from './AppLayout';
import LeftSideBar from '../sidebars/LeftSideBar';
import RightSideBar from '../sidebars/RightSideBar';

const FeedLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <AppLayout>
        <div className='grid grid-cols-1 xl:grid-gap-4 xl:grid-cols-8'>
          {/* left sidebar */}
          <div className='col-span-2 w-full h-full hidden xl:block'>
            <div className='sticky top-0'>
              <LeftSideBar />
            </div>
          </div>

          {/* content */}
          <div className='col-span-4'>{children}</div>

          {/* right sidebar */}
          <div className='col-span-2 w-full h-full hidden xl:block'>
            <div className='sticky top-0'>
              <RightSideBar />
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default FeedLayout;
