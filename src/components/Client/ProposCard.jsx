import React, { useState } from "react";
import Popup from "./DetailsPopup";

function ProposCard({ photo, name, fname, title, tempsestime, proposedPrice,phone,location,description ,email}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleConsultClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="py-4 w-[95%] h-[130px] border rounded-2xl bg-white shadow-md grid grid-cols-[0.5fr_4fr] border-gray-200">
      <div className="pt-1 flex justify-center relative">
        <img
          src={photo}
          className="w-[68px] h-[68px] rounded-full object-cover"
          alt="artisan"
        />
        <p className="absolute top-[4.6rem] font-semibold">{fname.charAt(0)}.{name}</p>
      </div>
      <div className="mr-6 grid grid-cols-[3fr_1.5fr]">
        <div className="py-1 pr-2 grid gap-2">
          <h1 className="text-gray-800">{name} vous a proposé un devis sur {title}</h1>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <p className="font-semibold text-gray-700">Temps estimé :</p> {tempsestime}
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-gray-700">Prix proposé :</p> {proposedPrice} DA
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end gap-3">
          <button className="dbutton bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md px-3 py-2">
            Accepter
          </button>
          <button className="dbutton bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md px-3 py-2">
            Refuser
          </button>
          <button
            onClick={handleConsultClick}
            className="dbutton bg-primary hover:bg-primary-dark text-white font-semibold rounded-md px-3 py-2"
          >
            Consulter
          </button>
        </div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        devis={{ photo, name, fname, title, tempsestime, proposedPrice,phone,description ,email,location}}
      />
    </div>
  );
}

export default ProposCard;
