import React, { useState } from 'react';
import Popup from "./Popup";

function DevisCard({ photo, name, fname, title, datelimit, budget, location, phone, description, email }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const handleConsultClick = () => {
    setIsPopupOpen(true);
  };

  const handleRefuseClick = () => {
    // Ajoutez ici la logique pour gérer le refus
    console.log("Refusé", title);
  };

  const handleMakeQuoteClick = () => {
    // Ajoutez ici la logique pour faire un devis
    console.log("Faire un devis", title);
  };

  return (
    <div className="py-4 w-[95%] h-[130px] border rounded-2xl bg-common border-secondary grid grid-cols-[0.5fr_4fr]">
      <div className="pt-1 relative flex justify-center">
        <img src={photo} className="w-[68px] h-[68px] rounded-full object-cover" alt={`Photo de ${name}`} />
        <p className="absolute top-[4.6rem] font-semibold">{fname.charAt(0)}.{name}</p>
      </div>
      <div className="mr-6 grid grid-cols-[3fr_1.9fr]">
        <div className="py-1 pr-2 grid gap-2">
          <h1>{name} vous a proposé un devis sur {title}</h1>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center">
              <p className="font-semibold">Date limite:</p>
              <p>{datelimit}</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold">Budget:</p> {budget} DA
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end gap-3">
          <button className="py-2 px-1.5 text-sm rounded-md text-white bg-green-700" onClick={handleMakeQuoteClick}>Faire un devis</button>
          <button className="dbutton text-sm bg-red-600" onClick={handleRefuseClick}>Refuser</button>
          <button className="dbutton text-sm bg-primary" onClick={handleConsultClick}>Consulter</button>
        </div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        devis={{ photo, name, fname, title, datelimit, budget, phone, description, email, location }}
      />
    </div>
  );
}

export default DevisCard;