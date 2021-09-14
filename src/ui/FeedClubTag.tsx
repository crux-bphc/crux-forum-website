import React from 'react';

const colors = {
  cyan: 'bg-cyan text-black',
  purple: 'bg-purple',
  green: 'bg-green',
  red: 'bg-red',
  blue: 'bg-blue',
} as { [key: string]: string };

interface FeedClubTagProps {
  name: string;
  color?: keyof typeof colors;

  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

const FeedClubTag: React.FC<FeedClubTagProps> = ({
  name,
  color = 'purple',
  className,
  onClick,
}) => {
  return (
    <button
      onClick={e => onClick?.(e)}
      className={`inline-flex items-center rounded-md px-1 sm:px-3 py-0.5 transition-colors ${
        colors[color!]
      } ${className ? className : ''}`}
    >
      <span className='text-xs'>{name}</span>
    </button>
  );
};

export default FeedClubTag;
