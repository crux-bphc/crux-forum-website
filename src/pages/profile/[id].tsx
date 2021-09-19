import React from 'react';
import AppLayout from '../../modules/layouts/AppLayout';
import PostItem from '../../modules/posts/PostItem';
import Button from '../../ui/Button';
import Container from '../../ui/Container';

import {
  AnnotationIcon,
  ClockIcon,
  UserGroupIcon,
  CalendarIcon,
} from '@heroicons/react/outline';

interface TagProfilePageProps {}

const TagProfilePage: React.FC<TagProfilePageProps> = ({}) => {
  return (
    <>
      <AppLayout>
        <Container className='pt-4 lg:pt-16'>
          <div className='grid grid-cols-1 lg:grid-cols-6 grid-gap-4'>
            <div className='col-span-1 col-start-1 w-full px-5 lg:px-0'>
              <div className='bg-gray-800 rounded-md shadow-xl lg:fixed'>
                <div className='w-full'>
                  <img
                    src='https://picsum.photos/id/108/200/200'
                    className='w-full'
                  ></img>
                </div>

                <div className='p-5 pt-8'>
                  <h4 className='mb-1 capitalize'>lorem ispum dolor</h4>
                  <p className='text-xs opacity-50 mb-5 uppercase'>
                    Technical Club
                  </p>

                  <p className='text-xs opacity-90 mb-2 flex items-center'>
                    <span className='mr-1'>
                      <AnnotationIcon className='inline w-5 h-5'></AnnotationIcon>
                    </span>
                    <span>69 Posts</span>
                  </p>
                  <p className='text-xs opacity-90 mb-2 flex items-center'>
                    {' '}
                    <span className='mr-1'>
                      <UserGroupIcon className='inline w-5 h-5'></UserGroupIcon>
                    </span>
                    <span>420 Subscribers</span>
                  </p>
                  <p className='text-xs opacity-90 mb-2 flex items-center'>
                    {' '}
                    <span className='mr-1'>
                      <CalendarIcon className='inline w-5 h-5'></CalendarIcon>
                    </span>
                    <span>69 Events</span>
                  </p>
                  <p className='text-xs opacity-90 mb-2 flex items-center'>
                    {' '}
                    <span className='mr-1'>
                      <ClockIcon className='inline w-5 h-5'></ClockIcon>
                    </span>
                    <span>Last used 10 hours ago</span>
                  </p>

                  <div className='flex w-full justify-center mt-8'>
                    <Button variant='cyan' className='py-1 w-full'>
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-4 w-full px-5 lg:px-8 mt-5 lg:mt-0'>
              <div className='w-full shadow-xl bg-gray-800 px-4 py-2 rounded'>
                <h4 className='mb-2'>About cruX BPHC</h4>
                <p className='text-sm font-light pb-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  vitae asperiores laborum commodi distinctio excepturi quos
                  odit cum, corrupti quod hic blanditiis iusto possimus dicta
                  reprehenderit delectus cupiditate iure dolorum.
                </p>
                <p className='text-sm font-light pb-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  vitae asperiores laborum commodi distinctio excepturi quos
                  odit cum, corrupti quod hic blanditiis iusto possimus dicta
                  reprehenderit delectus cupiditate iure dolorum.
                </p>
              </div>
              <div className='w-full shadow-xl bg-gray-800 px-4 py-2 mt-3 rounded'>
                <h4>Posts</h4>
              </div>
              <div className='pt-3'>
                {Array(5)
                  .fill(0)
                  .map((_, i) => {
                    return <PostItem key={i} />;
                  })}
              </div>
            </div>
          </div>
        </Container>
      </AppLayout>
    </>
  );
};

export default TagProfilePage;
