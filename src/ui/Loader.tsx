import React from 'react';
import clsx from 'clsx';
import classes from './styles/Loader.module.css';

const variants = {
  fullScreen: classes.default,
  default: classes.default,
  button: classes.button,
};

interface LoaderProps {
  variant?: keyof typeof variants;
  color?: 'cyan' | 'red' | 'green' | 'purple' | 'currentColor';
}

const Loader: React.FC<LoaderProps> = ({
  variant = 'default',
  color = 'currentColor',
  ...props
}) => {
  const loaderTemplate = (
    <div
      data-testid={'loader'}
      style={{ borderTopColor: color }}
      className={clsx([classes.loader, variants[variant]])}
      {...props}
    />
  );

  if (variant === 'fullScreen') {
    return (
      <div
        data-testid='loader-fullscreen'
        className='h-screen w-screen flex justify-center items-center'
      >
        {loaderTemplate}
      </div>
    );
  }

  return loaderTemplate;
};

export default Loader;
