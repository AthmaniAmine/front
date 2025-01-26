import ProposDevis from "../components/Client/ProposDevis"

const ProposDeviss=() =>{
  const Devis = [
    {
      photo: "../../public/utilisateur3.jpg",
      name: "Adel",
      fname: "Boudjema",
      title: "la peinture de murs extérieurs de maison",
      tempsestime: "2 semaines",
      proposedPrice: "165 000",
      location: "Bejaia",
      phone: "+213 555 66 99 12", 
      description: "Peinture de qualité avec des matériaux durables et respectueux de l'environnement. Travail garanti.",
      email:"a_belkacem@gmail.com"
    },
    {
      photo: "../../public/utilisateur3.jpg",
      name: "Adel",
      fname: "Boudjema",
      title: "la peinture de murs extérieurs de maison",
      tempsestime: "2 semaines",
      proposedPrice: "16 000",
      location: "Alger",
      phone: "+213 666 77 88 22", 
      description: "Peinture de qualité avec des matériaux durables et respectueux de l'environnement. Travail garanti.",
      email:"a_belkacem@gmail.com"
    },
    {
      photo: "../../public/utilisateur3.jpg",
      name: "Adelo",
      fname: "Boudjema",
      title: "la peinture de murs extérieurs de maison",
      tempsestime: "2 semaines",
      proposedPrice: "65 000",
      location: "Oran",
      phone: "+213 777 88 99 33",
      description: "Peinture de qualité avec des matériaux durables et respectueux de l'environnement. Travail garanti.",
      email:"a_belkacem@gmail.com"
    }
  ];
  

    return(
        <>
             <ProposDevis devisList={Devis} />
        </>
    )
}
export default ProposDeviss