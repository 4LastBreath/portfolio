import React from 'react';
import { LoadingSpinner } from './loadingSpinner';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  children: React.ReactNode
  loading?: boolean
}

export const Button = ({variant, type, children, loading, ...props}: ButtonProps) => {

  const buttonClass = loading ? 'button loading' : 'button'

  return (
    <button className={`${buttonClass} ${variant}`} disabled={loading} type={type} aria-busy={loading} {...props}>
      {loading ? <LoadingSpinner /> :  children}
    </button>
  );
};


interface IconButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const IconButton = ({children, ...props}: IconButtonProps) => {

  return (
    <button className='icon-button' {...props}>
      {children}
    </button>
  );
};
