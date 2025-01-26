import React from 'react';

function ACard({ name, fname, wilaya, service, photo1, photo2 }) {
  return (
    <div className="w-full cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image de fond */}
      <div className="relative h-24">
        <img 
          src={photo2} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <img 
          src={photo1} 
          alt="Profile" 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] rounded-full border-2 border-white object-cover" 
        />
      </div>

      {/* Informations Artisan */}
      <div className="pt-9 pb-6 px-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name} {fname}</h3>
        <p className="text-sm text-gray-600">{service}</p>
        <p className="text-sm text-gray-500">{wilaya}</p>
      </div>
    </div>
  );
}

export default ACard;
