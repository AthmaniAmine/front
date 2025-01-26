import React from 'react';

function SectionThree() {
  const sectionThree = {
    img1: '../../../public/pc.jpg', 
    img2: '../../../public/telephone.jpg',
    title: 'Comment ça fonctionne',
    etap: [
      'Choisissez un artisan en fonction de ses compétences, de sa localisation et de ses réalisations.',
      'Contactez plusieurs artisans pour recevoir des propositions adaptées à vos besoins.',
      'Comparez les offres, discutez avec les artisans et gérez tout directement sur la plateforme.'
    ]
  };

  return (
    <div className='container md:grid md:grid-cols-2 gap-4 py-16 '>
        {/* Section pour les photos */}
        <div className='relative px-4'>
        <img
          src={sectionThree.img1}
          alt="Illustration 1"
          className="md:w-[97%] md:h-[450px] w-0 h-0 border rounded-2xl  "
        />
        <img
          src={sectionThree.img2}
          alt="Illustration 2"
          className="absolute w-[46%] h-[40%]  rounded-2xl top-[-3px] right-[27px] border-white border-[7px]  "
        />
      </div>

      {/* Section pour le texte */}
      <div>
        <h1 className="text-3xl font-bold  pb-8 pl-2">{sectionThree.title}</h1>
        <div className="flex flex-col gap-6 font-semibold">
          {sectionThree.etap.map((etape, index) => (
            <div key={index} className="flex  items-center gap-2">
              <span className="text-white border rounded-full py-2 px-4 text-center  bg-primary  mr-2">{index + 1}</span>
              <p className='leading-9'>{etape}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
