import React from 'react';

interface ButtonProps {
  title: string;
  children?: React.ReactNode;
  handle: () => void;
  classNames: string;
}

const CustomButton: React.FC<ButtonProps> = ({ title, children, handle, classNames }) => {
  return (
    <div>
      <button onClick={handle} className={classNames}>
        {/* Icon Section */}
        {children}
        {/* Text Section */}
        <span>{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;
