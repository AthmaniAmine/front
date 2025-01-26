import React from "react";

function DetailsPopup({ isOpen, onClose, devis }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
<div className="bg-white p-7 rounded-lg shadow-lg w-[740px] h-[560px] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 ">Devis proposé</h2>
        <div className="flex flex-col gap-2">
          <h1 className="flex gap-2 border-b pb-2 border-b-black">
            <p className="font-semibold">Nom du projet:</p>
           <p>{devis.title}</p>
          </h1>
          <div className="grid grid-cols-2 gap-4 py-1">
             <div className="flex flex-col gap-1">
              <p className="font-bold">Prénom</p>
              <p className="text-gray-400 ">{devis.name}</p>
             </div>
             <div className="flex flex-col gap-1">
              <p className="font-bold">Nom</p>
              <p className="text-gray-400 ">{devis.fname}</p>
             </div>
             <div className="flex flex-col gap-1">
              <p className="font-bold">Téléphone</p>
              <p className="text-gray-400 ">{devis.phone}</p>
             </div>
             <div className="flex flex-col gap-1">
              <p className="font-bold">Email</p>
              <p className="text-gray-400 ">{devis.email}</p>
             </div>
             <div className="flex flex-col gap-1">
              <p className="font-bold">Temps estimé</p>
              <p className="text-gray-400 ">{devis.tempsestime}</p>
             </div>
             <div className="flex flex-col gap-1">
              <p className="font-bold">Prix estimé</p>
              <p className="text-gray-400 ">{devis.proposedPrice} DA</p>
             </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Wilaya</p>
            <p className="text-gray-400 ">{devis.location}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 pt-4">
        <p className="font-bold">Description</p>
        <p className="text-gray-400 ">{devis.description}</p>
        </div>
        <div className="flex justify-end mt-6">
          
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md font-semibold"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPopup;
