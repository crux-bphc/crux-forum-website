import React from 'react';

import AppLayout from './AppLayout';
import LeftSideBar from '../sidebars/LeftSideBar';
import RightSideBar from '../sidebars/RightSideBar';

const FeedLayout: React.FC<any> = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.style.setProperty('--scroll-width', 'none');

    return function () {
      document.documentElement.style.setProperty('--scroll-width', 'auto');
    };
  }, []);

  return (
    <>
      <AppLayout>
        <div className='grid grid-cols-1 xl:grid-gap-4 xl:grid-cols-9'>
          {/* left sidebar */}
          <div className='col-span-2 w-full h-full hidden xl:block'>
            <div className='stick-to-header'>
              <LeftSideBar />
            </div>
          </div>

          {/* content */}
          <div className='col-span-5'>{children}</div>

          {/* right sidebar */}
          <div className='col-span-2 w-full h-full hidden xl:block'>
            <div className='stick-to-header'>
              <RightSideBar />
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default FeedLayout;
