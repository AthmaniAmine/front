import React from 'react';
import ACard from './ACard';

function NewArtisans({ artisan }) {
  return (
    <div className="container  py-12 mb-24">
      <h1 className="title mb-10">Nos nouveaux partenaires</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artisan.map((art, index) => (
          <ACard
            key={index}
            name={art.name}
            fname={art.fname}
            wilaya={art.wilaya}
            service={art.service}
            photo1={art.photo1}
            photo2={art.photo2}
          />
        ))}
      </div>
    </div>
  );
}

export default NewArtisans;
