import React from 'react';
import { Switch as HSwitch } from '@headlessui/react';
import classes from './styles/Switch.module.css';
import clsx from 'clsx';

const variants = {
  cyan: 'bg-cyan',
  green: 'bg-green',
  red: 'bg-red',
  purple: 'bg-purple',
};

const sizes = {
  sm: {
    bg: 'h-[20px] w-[44px]',
    thumb: 'h-[17px] w-[17px]',
    active: 'translate-x-6',
  },
  md: {
    bg: 'h-[30px] w-[65px]',
    thumb: 'h-[27px] w-[27px]',
    active: 'translate-x-[34px]',
  },
};

interface SwitchProps {
  active: boolean;
  toggleActive: () => void;
  onChange: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  variant?: keyof typeof variants;
  size?: 'md' | 'sm';
}

const Switch: React.FC<SwitchProps> = ({
  active,
  left,
  right,
  toggleActive,
  onChange,
  variant = 'cyan',
  size = 'md',
}) => {
  return (
    <>
      <div className='flex gap-2 items-center'>
        {left ? left : null}
        <HSwitch
          data-testid='switch'
          checked={active}
          onChange={() => {
            toggleActive();
            onChange();
          }}
          className={clsx([
            classes.switchBtn,
            sizes[size].bg,
            active ? variants[variant] : 'bg-gray-accent',
          ])}
        >
          <span className='sr-only'>Use setting</span>
          <span
            data-testid='switch-thumb'
            aria-hidden='true'
            className={clsx([
              classes.switchThumb,
              sizes[size].thumb,
              active ? sizes[size].active : 'translate-x-0',
            ])}
          />
        </HSwitch>
        {right ? right : null}
      </div>
    </>
  );
};

export default Switch;
