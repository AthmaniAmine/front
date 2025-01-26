import React from 'react'

function ProjCard({ key, title, sdate, edate, status }) {
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
      <div className='flex items-center  gap-1.5'>
        <p className='font-semibold'>Statut:</p>
        <div className='flex items-center justify-center gap-2'>
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
          ) : 
          status === "annuler" ? (
          <>
           <p className='w-3 h-3 mt-0.5 bg-red-600 rounded-full'></p>
            <p>Annulé</p>
          </>
          ) : 
          (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjCard;
