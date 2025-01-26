import React from 'react'
import img1 from "../../../public/Rectangle 120.png"
function SectionOne() {
  return (
   <>
   <section 
           className="min-h-screen relative py-2 "
           style={{
             backgroundImage: `url(${img1})`, 
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed',
           }}
         >
           <section className="container ">
           <div className=" w-full flex-col z-10 flex justify-center items-center sm:px-4 pt-64 relative pb-16 mb-80 md:mb-28">
             <h1 className="text-3xl md:text-3xl lg:text-5xl font-semibold max-w-4xl text-center text-white">
             Découvrez des services sur mesure pour donner vie à toutes vos idées
             </h1>
           </div>
           </section></section>
   </>
  )
}

export default SectionOne;
