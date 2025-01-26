import React from 'react';
import img1 from '../../../public/macon1.jpg';
import img2 from '../../../public/electricien1.jpg';


function SectionFour() {
  return (
    <div className='container py-14 grid grid-cols-12 items-center gap-10 '>
      <div className='col-span-12 md:col-span-6 flex flex-col gap-14'>
        <div className='flex flex-col gap-8'>
          <h1 className='font-bold text-3xl w-3/4'>Vous êtes un artisan de qualité ?</h1>
          <p className='font-semibold w-[98%]'>
            Cliquez sur « REJOIGNEZ-NOUS » pour débuter votre aventure en tant qu’artisan, simplifiez la gestion de vos services et développez vos revenus dès aujourd’hui !
          </p>
        </div>
        <a href="/DemandeDevis">
  <button className='bg-primary text-white font-semibold px-4 py-3 border rounded-lg w-2/6'>
    Demander un devis
  </button>
</a>      </div>
      <div className='col-span-12 items-center md:col-span-6 grid grid-cols-12 gap-6'>
        <div className='grid grid-flow-row col-span-5 gap-8'>
          <img className='md:h-full md:w-full w-0 h-0 object-cover rounded-lg shadow-lg' src={img1} alt='Artisan secondaire 1' />
          <img className='md:h-full md:w-full w-0  object-cover rounded-lg shadow-lg' src={img1} alt='Artisan secondaire 2' />
        </div>
        <div className='h-0  lg:h-[450px] col-span-7'>
          <img className='md:h-full h-0 md:w-[90%] w-0  object-cover rounded-lg shadow-lg' src={img2} alt='Artisan principal' />
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
