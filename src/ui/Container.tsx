import clsx from 'clsx';
import React from 'react';

const widths = {
  xl: '2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-xl',
  lg: 'lg:max-w-screen-lg',
};

type ContainerProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  maxWidth?: keyof typeof widths;
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = 'xl',
  ...props
}) => {
  return (
    <>
      <div
        className={clsx(['mx-auto', widths[maxWidth], className])}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
