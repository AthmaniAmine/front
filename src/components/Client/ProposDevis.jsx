import React, { useState } from "react";
import ProposCard from "./ProposCard";

function ProposDevis({ devisList }) {
  const [sortedDevis, setSortedDevis] = useState(devisList); // Liste affichée
  const [isSorted, setIsSorted] = useState(false); // État pour savoir si trié ou non

  // Fonction pour trier selon le prix
  const handleSortByPrice = () => {
    if (!isSorted) {
      const sorted = [...sortedDevis].sort((a, b) => 
        parseInt(a.proposedPrice.replace(/\s/g, '')) - parseInt(b.proposedPrice.replace(/\s/g, ''))
      );
      setSortedDevis(sorted);
      setIsSorted(true);
    } else {
      setSortedDevis(devisList); // Réinitialiser à la liste originale
      setIsSorted(false);
    }
  };

  return (
    <div className="container py-16">
      <h1 className="title">Propositions de devis</h1>
      <div className="ml-1">
        <button 
          onClick={handleSortByPrice} 
          className="py-2 px-4 border rounded-md bg-secondary border-primary text-primary font-semibold"
        >
          {isSorted ? "Annuler le filtre" : "Filtrer selon le prix"}
        </button>
      </div>
      <div className="py-12 flex flex-col items-center gap-10">
        {sortedDevis.map((devis, index) => (
          <ProposCard
            key={index}
            photo={devis.photo}
            name={devis.name}
            fname={devis.fname}
            title={devis.title}
            tempsestime={devis.tempsestime}
            proposedPrice={devis.proposedPrice}
            location={devis.location}
            description={devis.description}
            phone={devis.phone}
            email={devis.email}
          />
        ))}
      </div>
    </div>
  );
}

export default ProposDevis;
