import React from 'react';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
}

export const Button = ({variant, ...props}: ButtonProps) => {

  const variantClass = variant === 'primary' ? 'button primary' : 'button secondary'

  return (
    <button className={variantClass} {...props} />
  );
};
