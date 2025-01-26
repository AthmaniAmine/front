import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';

function ArtisansPortfolio({ data }) {
  const [showAll, setShowAll] = useState(false); 

  // Limiter le nombre d'éléments affichés
  const projectsToShow = showAll ? data.portfolio : data.portfolio.slice(0, 4);

  return (
    <div className='container pb-16'>
      <div className='flex justify-between items-center pb-16'>
        <h1 className='text-3xl font-semibold'>Mon Portfolio</h1>
        {data.isArtisan && (
          <button
            className='border rounded-lg text-white bg-primary font-semibold  px-5 py-2 '
            onClick={() => {
              // Apour ajouter un portfolio
            }}
          >
            Ajouter un projet
          </button>
        )}
      </div>

      {/* Liste des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
        {projectsToShow.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>

      {/* Bouton Voir plus / Voir moins */}
      {data.portfolio.length > 4 && (
        <div className='text-center py-16'>
          <button
            className='border rounded-lg text-white bg-primary px-5 py-2'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ArtisansPortfolio;
