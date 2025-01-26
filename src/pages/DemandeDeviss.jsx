import ActProject from "../components/Client/ActProject"
import DemandeDevis from "../components/Client/DemandeDevis"
import { useState , useEffect } from "react" ;
import axios from "axios"
import { use } from "react";
const DemandeDeviss=() =>{
   const [demandesdevis , setDemandesdevis] = useState([])
   useEffect(() => {
    // Replace with your actual API endpoint

      
    axios.get("http://localhost:4000/devis/get_devis_by_user_id", { withCredentials: true })
      .then(response => {
        console.log(response.data)
         
        setDemandesdevis(response.data)
   
        

      })
      
      .catch(error => {
        console.error("Error fetching user data:", error);
        
      });
    }
  , []);
   const demandes=[
    {
        title:"la peinture de murs exterieurs de maison",
        datelimit:"25-01-2025",
        budget:"150 000",
    },
    {
        title:"la peinture de murs exterieurs de maison",
        datelimit:"25-01-2025",
        budget:"150 000",
    },
    {
        title:"la peinture de murs exterieurs de maison",
        datelimit:"25-01-2025",
        budget:"150 000",
    },
    
   ]
    const Actproj=[
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
    return(
        <>
        <DemandeDevis demande={demandesdevis}/>
        <ActProject proj={Actproj}/>
        </>
    )
}
export default DemandeDeviss