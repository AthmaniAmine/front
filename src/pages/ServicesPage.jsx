import SectionOne from "../components/services/SectionOne"
import Services from "../components/services/Services"
import { RiLayoutMasonryLine, RiPaintBrushLine  } from "react-icons/ri"
import { TbTools } from "react-icons/tb";
import { MdOutlineCleaningServices} from 'react-icons/md';
import { GiKitchenTap } from "react-icons/gi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import NewArtisans from "../components/services/NewArtisans";
import axios from "axios"
import { useEffect , useState } from "react";



const ServicesPage=() =>{

  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/services/get", { withCredentials: true })
      .then(response => {
        console.log("this is response", response.data);
        // Ensure the data is an array before setting it
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else {
          console.error("Expected an array, got:", response.data);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  console.log(services);
    // const services = [
    //     {
    //       icon: <GiKitchenTap size={45} />,
    //       title: " Service de Plomberie",
    //       description: "Interventions en plomberie pour installation, réparation et entretien, avec efficacité et professionnalisme",
    //     },
    //     {
    //       icon: <RiPaintBrushLine size={45} />,
    //       title: "Service de Peinture",
    //       description: "Services de peinture intérieure et extérieure, offrant des finitions soignées et durables pour embellir vos espaces",
    //     },
    //     {
    //       icon: <RiLayoutMasonryLine size={45} />,
    //       title: "Service de Maçonnerie",
    //       description: "Des travaux de maçonnerie professionnels pour construction, rénovation et réparation de qualité",
    //     },
    //     {
    //       icon: < HiOutlineLightningBolt size={45} />, 
    //       title: "Service d'Electricité",
    //       description: "Des solutions fiables et professionnelles pour vos installations, maintenances et réparations électriques, adaptées à vos besoins",
    //     },
    //     {
    //       icon: <TbTools size={45} />,
    //       title: "Service de Menuiserie",
    //       description: "Des services sur mesure pour vos créations, installations et réparations en menuiserie, alliant savoir-faire et qualité",
    //     },{
    //       icon: <MdOutlineCleaningServices size={45} />, 
    //       title: "Service de Ménage",
    //       description: "Nettoyage complet de vos espaces, avec soin et efficacité, pour un environnement propre et agréable",
    //     }
    // ]
    const artisan=[
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur2.jpg",
        photo2:"../../public/peintre4.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur2.jpg",
        photo2:"../../public/peintre4.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur2.jpg",
        photo2:"../../public/peintre4.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur2.jpg",
        photo2:"../../public/peintre4.jpg"
      },
    ]        
    return(
        <>
        <SectionOne/>
        <Services data={services}/>
        <NewArtisans artisan={artisan}/>
        </>
    )
}
export default ServicesPage