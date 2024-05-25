import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  ...props
}: ButtonProps) => {
  // label = 'test';

  return (
    <button
      {...props}
    >
      {primary ? 'primary' : 'secondary'}
    </button>
  );
};
