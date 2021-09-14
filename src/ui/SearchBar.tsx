import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

type SearchBarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  return (
    <div
      className={`flex bg-gray-800 border border-cyan rounded-md px-2 py-1 items-center ${className}`}
    >
      <SearchIcon className='w-4 h-4 mr-1 text-cyan' />
      <input
        type='text'
        placeholder='search...'
        className='bg-gray-800 w-full focus:outline-none text-sm'
      />
    </div>
  );
};

export default SearchBar;
