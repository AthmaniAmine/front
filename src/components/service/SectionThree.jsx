import React from 'react'

function SectionThree({data}) {
  return (
    <div className='container pb-32 '>
      <div className='grid md:grid-flow-row md:grid-cols-[1.6fr_2fr] gap-12'>
        <div className="pr-10 pt-4">
            <img src={data.servicePhoto} className="md:w-[90%] md:h-[90%] w-o h-0 rounded-lg shadow-xl" alt="service" />
        </div>
        <div className='flex flex-col  gap-9 pt-6'> 
          <h1 className='md:text-3xl md:text-start text-center text-2xl  font-bold '>Vous avez besoin d’un service ou d’un devis ?</h1>
          <p className='md:w-[90%] font-semibold tracking-wide  leading-7 pb-5 text-center md:text-start'>Remplissez simplement un formulaire, et il sera transmis aux professionnels adaptés pour vous répondre rapidement.</p>
          <div className='md:text-start text-center'>
           <button className='px-4 py-3 bg-primary border rounded-lg text-white font-semibold'>Demander un Devis</button>
         </div>
        </div>
    </div>
    </div>
  )
}

export default SectionThree
