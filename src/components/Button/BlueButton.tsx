import React from 'react';

interface SigninButtonProps {
  title: string;
  children?: React.ReactNode;
  handle: () => void;
}

const BlueButton: React.FC<SigninButtonProps> = ({ title, children, handle }) => {
  return (
    <div>
      <button
        onClick={handle}
        className="border border-gray-300  px-10 mt-5 py-2 rounded-[10px] flex items-center gap-2 text-sm hover:opacity-90 bg-gray-200 transform-transition hover:scale-105"
      >
        {/* Icon Section */}
        {children}
        {/* Text Section */}
        <span>{title}</span>
      </button>
    </div>
  );
};

export default BlueButton;
