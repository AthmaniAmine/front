import React from 'react';

function ServiceCard({ icon, title, description , onClick  }) {
  return (
    <div onClick={onClick} className="cursor-pointer px-4 py-8 bg-secondary border border-primary rounded-lg shadow-md flex flex-col items-center text-center gap-2 h-[320px]">
      <div className="text-white p-4 mb-3 bg-primary border rounded-full">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500  ">{description}</p>
    </div>
  );
}

export default ServiceCard;
