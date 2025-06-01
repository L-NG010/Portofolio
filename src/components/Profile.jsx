import React from 'react';

const Profile = () => {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Avatar Bundar */}
      <div>
        <img
          src="/assets/images/profile.jpg"
          alt="Profile"
          className="w-32 h-32 bg-white rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </div>

      {/* Nama */}
      <p className="mt-3 text-white text-base font-semibold bg-black bg-opacity-60 px-4 py-2 rounded-full">
        Lang Natanegara
      </p>
    </div>
  );
};

export default Profile;
