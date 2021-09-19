import { useRouter } from 'next/dist/client/router';
import React from 'react';
import AppLayout from '../../../modules/layouts/AppLayout';
import PostItem from '../../../modules/posts/PostItem';
import UserInfo from '../../../modules/profile/UserInfo';
import ClubTag from '../../../ui/ClubTag';
import Container from '../../../ui/Container';

interface PublicProfileProps {}

const PublicProfile: React.FC<PublicProfileProps> = ({}) => {
  const router = useRouter();

  return (
    <>
      <AppLayout>
        <Container className='grid py-2 px-6 lg:py-2 lg:px-20 md:py-8 md:px-5 xl:gap-x-40 lg:gap-x-20 md:gap-x-8 md:grid-cols-2 grid-cols-1 sm:py-10 sm:px-8 gap-y-10 md:gap-y-0'>
          <div className='col-start-1 col-end-2 grid'>
            <div>
              <UserInfo />
            </div>
          </div>
          <div className='md:col-start-2 md:col-end-3 col-start-1 col-end-2'>
            <h3 className='mb-3'>Follows</h3>
            <div className='mb-6'>
              <h5 className='mb-2'>Common With You</h5>
              <div className='mb-2'>
                {Array(3)
                  .fill(0)
                  .map((_, i) => {
                    return (
                      <div key={i} className='mr-2 inline-block mb-2'>
                        <ClubTag
                          name='Crux'
                          color={i < 2 ? 'green' : i < 1 ? 'purple' : 'red'}
                          onClick={() => {
                            router.push('/profile/crux');
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className='mb-6'>
              <h5 className='mb-2'>Others</h5>
              <div className='mb-2'>
                {Array(7)
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
            </div>
            <div className='mb-3'>
              <h3 className='mb-3'>Posts</h3>
              <div className='md:h-[450px] pb-5 md:pr-3 md:overflow-y-scroll '>
                {Array(6)
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

export default PublicProfile;
