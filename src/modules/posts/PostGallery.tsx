import React from 'react';
import Image from 'next/image';

interface PostGalleryProps {
  images: string[];
}

const PostGallery: React.FC<PostGalleryProps> = ({ images }) => {
  if (images.length == 0) {
    return <></>;
  } else if (images.length == 1) {
    return (
      <div className='relative'>
        <img src={images[0]} className='w-full' />
      </div>
    );
  } else if (images.length == 2) {
    return (
      <div className='grid grid-cols-1 grid-rows-2 gap-y-2 h-[600px]'>
        <div className='relative'>
          <Image src={images[0]} layout='fill' />
        </div>
        <div className='relative'>
          <Image src={images[1]} layout='fill' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='grid grid-cols-2 h-[200px] sm:h-[400px] gap-2'>
        {/* <div className='relative'>
          <Image src={images[0]} layout='fill' />
        </div>

        <div className='grid grid-cols-1 grid-rows-2 gap-y-2'>
          <div className='relative'>
            <Image src={images[2]} layout='fill' />
          </div>
          <div className='relative'>
            <Image src={images[1]} layout='fill' />
          </div>
        </div> */}
        <div className='relative row-span-2'>
          <Image src={images[0]} layout='fill' />
        </div>
        <div className='relative'>
          <Image src={images[1]} layout='fill' />
        </div>
        <div className='relative'>
          <Image src={images[2]} layout='fill' />
        </div>
      </div>
    );
  }
};

export default PostGallery;
