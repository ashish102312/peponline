import React from 'react';

const ProfileCard = ({ name, age, image, bio }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-6 transition-all hover:shadow-xl">
      <div className="flex flex-col items-center">
        <img 
          className="w-24 h-24 rounded-full object-cover border-4 border-emerald-100 mb-4" 
          src={image} 
          alt={name} 
        />
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2">
          {age} Years Old
        </span>
        <p className="text-gray-600 text-center mt-4 text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
