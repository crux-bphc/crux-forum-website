import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import ClubTag from '../../ui/ClubTag';
import FeedClubTag from '../../ui/FeedClubTag';

interface PostItemProps {
  bottomMargin?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({bottomMargin = true}) => {
  const router = useRouter();

  return (
    <>
      <div className={`bg-gray-800 rounded p-4 ${bottomMargin ? 'mb-4' : ''}`}>
        <div className='xl:hidden item-center flex justify-end mb-3'>
          <p className='text-xs opacity-60'>12th July, 6:43 PM</p>
        </div>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex gap-2'>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <FeedClubTag
                  key={i}
                  name='Crux'
                  color={i === 0 ? 'purple' : i === 1 ? 'blue' : 'green'}
                  onClick={() => {
                    router.push('/profile/crux');
                  }}
                />
              ))}
          </div>
          <p className='text-xs opacity-60 hidden xl:block'>
            12th July, 6:43 PM
          </p>
        </div>
        <div className='mb-3'>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            sunt ratione, non modi earum suscipit nemo veniam nulla ad esse,
            adipisci magnam at repudiandae assumenda consectetur sequi, quos
            perspiciatis? Atque rem, quae pariatur ipsam dolorem nulla culpa,
            esse corporis voluptas porro mollitia aut at voluptatum aliquam
            officia omnis sapiente saepe.
          </p>
        </div>
        <div className='flex justify-end'>
          <Link href='/'>
            <a className='text-sm hover:underline text-cyan'>View Post</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostItem;
