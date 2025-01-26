import React from 'react'

function DemandeCard({title,datelimit,budget}) {
  return (
    <div className='p-5 w-[95%] h-[130px] border rounded-2xl bg-common border-secondary  grid grid-cols-[3fr_1.8fr] '>
     <div className='flex flex-col gap-2'>
      <div className='flex j gap-2'>
        <p className='font-semibold'>Nom du projet:</p>
        {title}
      </div>
      <div className='flex gap-2'>
          <p className='font-semibold'>Date limite:</p>
          {datelimit}
      </div>
      <div className=' flex gap-1'>
       <p className='font-semibold'>Budget:</p>
       {budget} DA
      </div>
      </div>
      <div className='flex items-end justify-end gap-3   '> 
          <button className='dbutton bg-red-600'>Annuler </button>
          <button className='dbutton bg-primary'>Devis</button>
        </div> 
    </div>
  )
}

export default DemandeCard
