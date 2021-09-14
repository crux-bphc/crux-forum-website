import React from 'react';

type TripleDotIconProps = React.SVGProps<SVGSVGElement>;

const TripleDotIcon: React.FC<TripleDotIconProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='5'
      fill='none'
      viewBox='0 0 20 5'
      {...props}
      className={className}
    >
      <path
        fill='currentColor'
        d='M2.5 0A2.507 2.507 0 000 2.5C0 3.875 1.125 5 2.5 5S5 3.875 5 2.5 3.875 0 2.5 0zm15 0A2.507 2.507 0 0015 2.5C15 3.875 16.125 5 17.5 5S20 3.875 20 2.5 18.875 0 17.5 0zM10 0a2.507 2.507 0 00-2.5 2.5C7.5 3.875 8.625 5 10 5s2.5-1.125 2.5-2.5S11.375 0 10 0z'
      ></path>
    </svg>
  );
};

export default TripleDotIcon;
