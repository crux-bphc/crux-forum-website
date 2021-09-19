import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppStoreIcon from '../../ui/icons/AppStoreIcon';
import PlayStoreIcon from '../../ui/icons/PlayStoreIcon';
import IconButton from '../../ui/IconButton';

const SignUpLayout: React.FC = ({ children }) => {
  return (
    <>
      <div className='min-h-screen relative flex flex-col'>
        {/* header */}
        <header className='px-8 py-4'>
          <Link href='/'>
            <a className='text-lg'>cruX Forum</a>
          </Link>
        </header>

        <div className='w-16 sm:w-32 lg:w-48 absolute top-2/3 sm:bottom-1/3 lg:top-1/3 z-0'>
          <Image
            height='800px'
            width='450px'
            src={'/images/squares.png'}
            className='w-full h-full'
            draggable={false}
            alt='design-1'
          />
        </div>

        <div className='w-16 sm:w-32 lg:w-48 absolute top-10 right-0 lg:top-20 text-right z-0'>
          <Image
            height='800px'
            width='450px'
            src={'/images/parabolas.png'}
            className='w-full h-full'
            draggable={false}
            alt='design-2'
          />
        </div>

        {/* body */}
        <div className='flex-grow z-10 flex flex-col'>{children}</div>

        {/* footer */}
        <footer className='w-full px-2 sm:px-8 py-4 text-gray-accent'>
          <div className='grid grid-cols-3 sm:gap-4'>
            <div className='text-center sm:text-left'>
              <Link href='/'>
                <a className='text-xs'>Privacy Policy</a>
              </Link>
            </div>

            <div className='inline text-center'>
              <IconButton className='mx-2 text-cyan'>
                <PlayStoreIcon />
              </IconButton>

              <IconButton className='mx-2 text-cyan'>
                <AppStoreIcon />
              </IconButton>
            </div>
            <div className='text-center sm:text-right'>
              <span className='text-xs'>
                Copyright 2021 cruX. All Rights Reserved
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SignUpLayout;
