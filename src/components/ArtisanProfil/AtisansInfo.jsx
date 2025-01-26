import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

function AtisansInfo({ data }) {
  return (
    <div className='container pt-16 pb-10'>
      <h1 className='py-14 text-3xl font-semibold'>Rencontrez Votre Artisan de Confiance</h1>
      <div className='border border-tertiary rounded-xl p-8 py-12'>
        <div className='grid md:grid-cols-[1fr_3fr] pb-5'>
          <div className='flex md:pl-4 md:justify-normal justify-center items-center'>
            {/* Photo de profil */}
            <img 
              src={data.photo} 
              alt={`${data.name} ${data.fname}`} 
              className='w-[150px] h-[150px] rounded-full border-2 border-gray-200 object-cover' 
            />
          </div>
          <div className='md:text-start text-center md:py-0 py-4'>
            <h1 className='font-medium text-xl'>{data.fname} {data.name}</h1>
            <p className='pb-4 font-medium'>{data.service}</p>
            <p className='font font-medium'>{data.location}</p>
            <p className='text-gray-500'>{data.email}</p>
            <p className='text-gray-500'>{data.phone}</p>
          </div>
        </div>
        <div className='flex gap-16 items-center pt-6 font-semibold'>
          <p className='flex items-center gap-5'>Contacter maintenant <FaLongArrowAltRight /></p>
          {data.isArtisan ? (
            <button className="px-4 py-2 bg-primary text-white border rounded-lg">
              Éditer le profil
            </button>
          ) : (
            <button className="px-4 py-2 bg-primary text-white border rounded-lg">
              Demander un devis
            </button>
          )}
        </div>
      </div>
      <div className='md:py-20 py-16  md:text-start text-center  md:w-[98%] md:px-2'>
        <h1 className='md:text-3xl text-2xl font-semibold pb-8'>À Propos de Moi</h1>
        <p className='text-gray-500 leading-7 tracking-wide'>{data.description}</p>
      </div>
    </div>
  );
}

export default AtisansInfo;
