import React from 'react';

const sizes = {
  xs: 'h-[40px]',
  sm: 'h-[60px]',
  md: 'md:h-[100px] h-[65px]',
  lg: 'md:h-[160px] h-[120px]',
};

type AvatarProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  size?: keyof typeof sizes;
};

const Avatar: React.FC<AvatarProps> = ({
  src = '/profile.svg',
  alt = 'profile',
  size = 'md',
  className,
  ...props
}) => {
  return (
    <>
      <img
        className={`bg-green rounded-full shadow ${sizes[size]} ${
          className ? className : ''
        }`}
        src={src}
        alt={alt}
        {...props}
      />
    </>
  );
};

export default Avatar;