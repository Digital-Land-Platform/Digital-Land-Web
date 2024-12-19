import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      {/* Header Banner and Profile Section */}
      <div className="relative flex flex-col items-center w-full max-w-5xl bg-white rounded-lg shadow-md p-6 mb-8">
        {/* Header Banner */}
        <div className="relative w-full h-[224px]">
          <img src="/home_profile_icon.svg" alt="House Banner" className="w-full h-full rounded-lg object-cover" />
          <button
            className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow hover:bg-black"
            title="Edit Banner"
          >
            ✏️
          </button>
        </div>

        {/* Profile Image */}
        <div className="absolute top-[160px] w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="/profile_picture.svg" alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-2xl font-bold text-gray-800">Welcome on board!</h1>
          <p className="text-gray-600 text-center mt-2">Let’s have your profile sparkling to all beholders ✨✨</p>

          <button className="mt-4 bg-[#FFE4BD] px-6 py-3 w-[486px] rounded-lg text-center text-[#1C2137] font-sm shadow-md">
            Verify your account to begin trading! <span className="ml-2 text-blue-600 font-sm">✔ Verify</span>
          </button>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-white w-full max-w-5xl rounded-lg shadow-md px-8 py-6">
        <div className="flex justify-center">
          <ol className="relative border-l-2 border-black">
            {/* Step 1 */}
            <li className="mb-4 ml-5">
              <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full -left-3 ring-5 ring-white"></span>
              <h3 className="font-medium text-gray-800">Basic Info</h3>
            </li>
            {/* Step 2 */}
            <li className="mb-4 ml-6">
              <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full -left-3 ring-5 ring-white"></span>
              <h3 className="font-medium text-gray-800">Contact Info</h3>
            </li>
            {/* Step 3 */}
            <li className="mb-4 ml-6">
              <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full -left-3 ring-5 ring-white"></span>
              <h3 className="font-medium text-gray-800">Address</h3>
            </li>
            {/* Step 4 */}
            <li className="mb-4 ml-6">
              <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full -left-3 ring-5 ring-white"></span>
              <h3 className="font-medium text-gray-800">User Verification</h3>
            </li>
            {/* Step 5 */}
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full -left-3 ring-4 ring-white"></span>
              <h3 className="font-medium text-gray-800">Security</h3>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
