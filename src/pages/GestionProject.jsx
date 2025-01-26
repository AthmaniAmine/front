import Devis from "../components/Artisan/Devis";
import Project from "../components/Artisan/Project";
import { useEffect , useState } from "react";
import axios from "axios"
const GestionProject=() =>{
  const [demandesdevis , setDemandesdevis] = useState([])
  const [projects , setProjects] = useState([])
   useEffect(() => {
    // Replace with your actual API endpoint

      
    axios.get("https://dzartisansapp.onrender.com/devis/get_devis_for_artisan", { withCredentials: true })
      .then(response => {
        console.log(response.data)
         
        setDemandesdevis(response.data)
   
        

      })
      
      .catch(error => {
        console.error("Error fetching user data:", error);
        
      });
      axios.get("https://dzartisansapp.onrender.com/devis/get_artisan_projects", { withCredentials: true })
      .then(response => {
        console.log(response.data)
         
        setProjects(response.data)
   
        

      })
      
      .catch(error => {
        console.error("Error fetching user data:", error);
        
      });
    }
    
    
  , []);

  const devis = [
    {
      photo: "../../public/utilisateur3.jpg",
      name: "Adel",
      fname: "Boudjema",
      title: "la peinture de murs extérieurs de maison",
      datelimit: "25-01-2025",
      budget: "165 000",
      email: "a_belkacem@gmail.com",
      location: "bejaia", 
      phone: "+213 6 55 66 99 12",
      description: "Bonjour, je souhaite repeindre les murs extérieurs de ma maison. La surface est d’environ 120 m², avec une préparation des murs nécessaire. Merci d’assurer une finition soignée et résistante aux intempéries" // Correction ici
    },
    {
      photo: "../../public/utilisateur3.jpg",
      name: "Adel",
      fname: "Boudjema",
      title: "la peinture de murs extérieurs de maison",
      datelimit: "25-01-2025",
      budget: "165 000",
      email: "a_belkacem@gmail.com",
      location: "bejaia", 
      phone: "+213 6 55 66 99 12",
      description: "Bonjour, je souhaite repeindre les murs extérieurs de ma maison. La surface est d’environ 120 m², avec une préparation des murs nécessaire. Merci d’assurer une finition soignée et résistante aux intempéries" // Correction ici
    },
    {
      photo: "../../public/utilisateur3.jpg",
      name: "Adel",
      fname: "Boudjema",
      title: "la peinture de murs extérieurs de maison",
      datelimit: "25-01-2025",
      budget: "165 000",
      email: "a_belkacem@gmail.com",
      location: "bejaia",
      phone: "+213 6 55 66 99 12",
      description: "Bonjour, je souhaite repeindre les murs extérieurs de ma maison. La surface est d’environ 120 m², avec une préparation des murs nécessaire. Merci d’assurer une finition soignée et résistante aux intempéries" // Correction ici
    },
];

      const projet=[
        {title:"la peinture de murs exterieurs de maison",
         startDate:"20-12-2023",
         endDate:"20-01-2024",
         status:"terminer"
        },
        {title:"la peinture de murs exterieurs de maison",
         startDate:"20-12-2023",
         endDate:"20-01-2024",
         status:"encours"
         },
         {title:"la peinture de murs exterieurs de maison",
          startDate:"20-12-2023",
          endDate:"20-01-2024",
          status:"annuler"
         },
       
       ]
       const reponse = [
        {
          photo: "../../public/utilisateur3.jpg",
          name: "Adel",
          fname: "Boudjema",
          title: "la peinture de murs exterieurs de maison",
          startDate: "22-12-2023",
          endDate: "11-02-2024",
          proposedPrice: "165 000",
        },
        {
          photo: "../../public/utilisateur3.jpg",
          name: "Adel",
          fname: "Boudjema",
          title: "la peinture de murs exterieurs de maison",
          startDate: "22-12-2023",
          endDate: "11-02-2024",
          proposedPrice: "16 000",
        },
        {
          photo: "../../public/utilisateur3.jpg",
          name: "Adelo",
          fname: "Boudjema",
          title: "la peinture de murs exterieurs de maison",
          startDate: "22-12-2023",
          endDate: "11-02-2024",
          proposedPrice: "65 000",
        },
      ];
   
    return(
        <>
             <Devis devisList={demandesdevis} />
             <Project projet={projects}/>
        </>
    )
}
export default GestionProject 