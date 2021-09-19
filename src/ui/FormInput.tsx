import clsx from 'clsx';
import React from 'react';
import classes from './styles/FormInput.module.css';

type FormInputProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  label: string;
  error?: boolean;
};

const styles = {
  active: 'focus:border-cyan',
  error: 'focus:border-red',
};

const FormInput: React.FC<FormInputProps> = ({ error, label, ...props }) => {
  return (
    <div {...props}>
      <label className='block'>{label}</label>
      <input
        type='text'
        className={clsx([
          classes.formInput,
          error ? styles.error : styles.active,
        ])}
      />
    </div>
  );
};

export default FormInput;
