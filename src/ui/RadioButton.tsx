import React from 'react';
import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import classes from './styles/RadioButton.module.css';

const { root, ring, fill } = classes;

const colors = {
  cyan: 'bg-cyan',
  green: 'bg-green',
  red: 'bg-red',
  purple: 'bg-purple',
};

interface RadioButtonProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  value: string | number;
  color?: keyof typeof colors;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  left,
  right,
  value,
  color = 'cyan',
}) => {
  return (
    <div className={root}>
      {left && (
        <RadioGroup.Label htmlFor={value.toString()}>{left}</RadioGroup.Label>
      )}
      <RadioGroup.Option className='border-transparent' value={value}>
        {({ checked }) => (
          <div id={value.toString()} className={ring}>
            <div
              className={clsx([
                fill,
                checked ? colors[color] : 'bg-transparent',
              ])}
            />
          </div>
        )}
      </RadioGroup.Option>
      {right && <RadioGroup.Label>{right}</RadioGroup.Label>}
    </div>
  );
};

export default RadioButton;
