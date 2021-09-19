import { useRouter } from 'next/dist/client/router';
import React from 'react';
import EventItem from '../../../modules/events/EventItem';
import AppLayout from '../../../modules/layouts/AppLayout';
import PostItem from '../../../modules/posts/PostItem';
import UserInfo from '../../../modules/profile/UserInfo';
import Button from '../../../ui/Button';
import ClubTag from '../../../ui/ClubTag';
import Container from '../../../ui/Container';
import ScrollContainer from '../../../ui/ScrollBar';

interface MyProfileProps {}

const MyProfile: React.FC<MyProfileProps> = ({}) => {
  const router = useRouter();

  return (
    <AppLayout>
      <Container className='grid py-2 px-6 lg:py-2 lg:px-20 md:py-8 md:px-5 xl:gap-x-40 lg:gap-x-20 md:gap-x-8 md:grid-cols-2 grid-cols-1 sm:py-10 sm:px-8 gap-y-10 md:gap-y-0'>
        <div className='col-start-1 col-end-2 grid'>
          <div>
            <UserInfo />
            <Button className='w-max' variant='cyan'>
              Edit Your Profile
            </Button>
          </div>
        </div>
        <div className='md:col-start-2 md:col-end-3 col-start-1 col-end-2'>
          <h3 className='mb-3'>Following</h3>
          <div className='mb-6'>
            <div className='mb-2'>
              {Array(8)
                .fill(0)
                .map((_, i) => {
                  return (
                    <div key={i} className='mr-2 inline-block mb-2'>
                      <ClubTag
                        name='Crux'
                        color={i < 3 ? 'green' : i < 5 ? 'purple' : 'blue'}
                        onClick={() => {
                          router.push('/profile/crux');
                        }}
                      />
                    </div>
                  );
                })}
            </div>
            <a className='hover:underline cursor-pointer'>
              Find More tags to follow
            </a>
          </div>
          <div className='mb-3'>
            <h3 className='mb-3'>Post made by me</h3>
            <ScrollContainer className='md:h-[300px] md:pr-3'>
              {Array(6)
                .fill(0)
                .map((_, i) => {
                  return <PostItem key={i} bottomMargin={i != 5} />;
                })}
            </ScrollContainer>
          </div>
          <div className='mb-3'>
            <h3 className='mb-3'>My Events</h3>
            <ScrollContainer className='md:h-[200px] md:pr-3'>
              {Array(4)
                .fill(0)
                .map((_, i) => {
                  return <EventItem key={i} bottomBorder={i != 3} />;
                })}
            </ScrollContainer>
          </div>
        </div>
      </Container>
    </AppLayout>
  );
};

export default MyProfile;
