import React, { useState } from "react";
import DevisCard from "./DevisCard";

function Devis({ devisList }) {

  return (
    <div className="container py-16">
      <h1 className="title">Demande(s) de devis</h1>
      <div className="py-12 flex flex-col items-center gap-10">
        {devisList.map((devis) => (
          <DevisCard
            photo={devis.photo_de_profil}
            name={devis.nom}
            fname={devis.prenom}
            title={devis.nomprojet}
            datelimit={new Date(devis.datelimite).toISOString().split('T')[0]}
            budget={devis.coutmax}
            description={devis.description}
            email={devis.email}
            location={devis.address}
            phone={devis.telephone}
          />
        ))}
      </div>
    </div>
  );
}

export default Devis;
