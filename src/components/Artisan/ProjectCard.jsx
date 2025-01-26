import React, { useState } from 'react';

function ProjectCard({ title, sdate, edate, status: initialStatus }) {
  const [status, setStatus] = useState(initialStatus);  
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);  

 
  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setIsDropdownVisible(false); 
  };

  return (
    <div className='p-6 w-[95%] h-[130px] border rounded-2xl bg-common border-secondary flex flex-col gap-2 '>
      <div className='flex gap-2'>
        <p className='font-semibold'>Nom du projet:</p>
        {title}
      </div>
      <div className='flex justify-start gap-12'>
        <div className='flex gap-2'>
          <p className='font-semibold'>Date de début:</p>
          {sdate}
        </div>
        <div className='flex gap-2'>
          <p className='font-semibold'>Date de fin:</p>
          {edate}
        </div>
      </div>
      <div className='flex items-center gap-1.5'>
        <p className='font-semibold'>Statut:</p>
        
        {/* Affichage du statut actuel */}
        <div
          className='flex items-center justify-center gap-2 border px-2 py-1 cursor-pointer rounded-md shadow-sm'
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}  // Afficher ou masquer la liste déroulante au clic
        >
          {status === "terminer" ? (
            <>
              <p className='w-3 h-3 mt-0.5 bg-green-700 rounded-full'></p>
              <p>Terminé</p>
            </>
          ) : status === "encours" ? (
            <>
              <p className='w-3 h-3 mt-0.5 bg-primary rounded-full'></p>
              <p>En cours</p>
            </>
          ) : status === "annuler" ? (
            <>
              <p className='w-3 h-3 mt-0.5 bg-red-600 rounded-full'></p>
              <p>Annulé</p>
            </>
          ) : (
            <></>
          )}
        </div>

        {/* Liste déroulante visible lorsque isDropdownVisible est vrai */}
        {isDropdownVisible && (
          <div className='absolute bg-white border rounded-md shadow-md mt-2 w-32'>
            <ul className='list-none'>
              <li
                className='p-2 cursor-pointer hover:bg-gray-100'
                onClick={() => handleStatusChange("terminer")}
              >
                Terminé
              </li>
              <li
                className='p-2 cursor-pointer hover:bg-gray-100'
                onClick={() => handleStatusChange("encours")}
              >
                En cours
              </li>
              <li
                className='p-2 cursor-pointer hover:bg-gray-100'
                onClick={() => handleStatusChange("annuler")}
              >
                Annulé
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
