import React, { FC, ReactNode } from 'react';
import '../styles/button-styles/Button.css'

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button className='newButton' onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
export {};
