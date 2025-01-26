import React from 'react';

function PortfolioCard({ title, image, description }) {
  return (
    <div className=" cursor-pointer bg-white border-[0.5px] shadow-md rounded-md w-[95%] h-[220px] grid grid-cols-[1.3fr_2fr] gap-4  ">
     <div><img src={image} className='h-full w-full border rounded-lg'/>
     </div>
     <div className='flex flex-col gap-3 p-4  my-2 '>
       <p className='font-semibold '>{title}</p>
       <p className='font-light text-gray-500 tracking-wide text-sm w-[98%]'> {description}</p>
     </div>
    </div>
  );
}

export default PortfolioCard;
