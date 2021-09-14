import React from 'react';
import ClubTagIcon from './icons/ClubTagIcon';

const colors = {
  cyan: 'bg-cyan text-black',
  purple: 'bg-purple',
  green: 'bg-green',
  red: 'bg-red',
  blue: 'bg-blue',
} as { [key: string]: string };

interface ClubTagProps {
  name: string;
  color?: keyof typeof colors;
  isSelected?: boolean;
  variant?: 'display' | 'select';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}

const ClubTag: React.FC<ClubTagProps> = ({
  name,
  color = 'purple',
  isSelected,
  className,
  variant = 'display',
  onClick,
}) => {
  return (
    <button
      onClick={e => onClick?.(e)}
      className={`inline-flex items-center rounded-md px-1 py-1 transition-colors ${
        variant === 'select'
          ? isSelected
            ? colors[color!]
            : 'bg-gray-disabled'
          : colors[color!]
      } ${className ? className : ''}`}
    >
      <ClubTagIcon className='h-5 w-5 mr-2' />
      <span className='text-sm mr-4'>{name}</span>
    </button>
  );
};

export default ClubTag;
