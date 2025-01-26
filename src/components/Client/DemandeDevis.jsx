import React, { useState } from 'react';
import DemandeCard from './DemandeCard';

function DemandeDevis({ demande }) {
  const [showAll, setShowAll] = useState(false);
  console.log(demande)
  // Affiche seulement les 3 premières demandes si showAll est false
  const displayedDemandes = showAll ? demande : demande.slice(0, 3);

  return (
    <div className='container pt-24 pb-12'>
      <h1 className='title'>Mes demandes de devis</h1>
      <div className="py-10 flex flex-col items-center gap-10">
        {displayedDemandes.map((d, index) => (
          <DemandeCard
            key={index}
            title={d.nomprojet}
            datelimit={new Date(d.datelimite).toISOString().split('T')[0]}
            budget={d.coutmax}
          />
        ))}
      </div>
      {/* Affiche le bouton "Voir plus" seulement si le nombre de demandes est supérieur à 3 */}
      {demande.length > 3 && (
        <div className='flex justify-center mt-6'>
          <button 
            className='px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
      )}
    </div>
  );
}

export default DemandeDevis;
