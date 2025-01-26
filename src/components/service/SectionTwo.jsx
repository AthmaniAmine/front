import React, { useState } from "react";
import ArtisanCard from "./ArtisanCard";

function SectionTwo({ data }) {
  const [showAll, setShowAll] = useState(false);

  // Sélection des artisans à afficher
  const usersToShow = showAll ? data.artisan : data.artisan.slice(0, 8);

  return (
    <div className="container pt-24 md:pb-8">
      <h1 className="font-bold text-2xl pb-12">Découvrez nos prestataires de services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-10 md:py-12">
        {usersToShow.map((art, index) => (
          <ArtisanCard
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
      <div className="text-center md:py-20 py-6">
        {/* Afficher le bouton uniquement si le nombre d'artisans est supérieur à 8 */}
        {data.artisan.length > 8 && (
          !showAll ? (
            <button
              className="bg-primary px-6 py-2 font-medium text-lg border rounded-lg text-white"
              onClick={() => setShowAll(true)}
            >
              Voir tout
            </button>
          ) : (
            <button
              className="bg-primary px-6 py-2 font-medium text-lg border rounded-lg text-white"
              onClick={() => setShowAll(false)}
            >
              Réduire
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default SectionTwo;
