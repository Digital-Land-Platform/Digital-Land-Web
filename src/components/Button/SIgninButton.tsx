import React from 'react';
import { FaUserPlus } from 'react-icons/fa';

const SigninButton: React.FC = () => {
  return (
    <div>
      <button className="px-4 py-2 text-white rounded-[10px] flex items-center gap-2 text-sm shadow-md hover:opacity-90 bg-gradient-to-t from-[#FF9700] via-[#DF8407] to-[#BF710D]">
        {/* Icon Section */}
        <span className="flex items-center justify-center w-6 h-6 rounded-10 bg-gradient-to-t from-[#FF9700] via-[#DF8407] to-[#BF710D]">
          <FaUserPlus className="text-white w-4 h-4" />
        </span>

        {/* Text Section */}
        <span>Sign Up</span>
      </button>
    </div>
  );
};

export default SigninButton;
