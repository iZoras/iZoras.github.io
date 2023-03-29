import React, { FC, ReactNode } from "react";
import "../styles/button-styles/Button.css";

interface OrangeButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className: string;
}

const OrangeButton: FC<OrangeButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <div
      className={
        "whitespace-nowrap gap-1 my-auto flex items-center rounded-full justify-center bg-orange-400 text-white " +
        className
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default OrangeButton;
