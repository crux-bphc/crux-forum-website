import React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
};

const Link: React.FC<LinkProps> = ({ href, className, children, ...props }) => {
  return (
    <>
      <NextLink href={href}>
        <a className={clsx(['underline text-cyan', className])} {...props}>
          {children}
        </a>
      </NextLink>
    </>
  );
};

export default Link;
