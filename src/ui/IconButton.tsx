import clsx from 'clsx';
import React from 'react';

type IconButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

const IconButton: React.ForwardRefExoticComponent<
  Pick<
    IconButtonProps,
    'key' | keyof React.ButtonHTMLAttributes<HTMLButtonElement>
  > &
    React.RefAttributes<HTMLButtonElement>
> = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      className={clsx([
        'bg-transparent rounded-md p-2 cursor-pointer',
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
