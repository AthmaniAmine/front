import SectionOne from "../components/service/SectionOne";
import SectionTwo from "../components/service/SectionTwo";
import SectionThree from "../components/service/SectionThree";
import axios from "axios"
import { useEffect , useState } from "react";
import { useLocation } from "react-router-dom";
const ServicePage = () => {
  
  const location = useLocation();  // To access state passed from navigate
  const { id } = location.state || {};
  console.log(id)
    // Replace with your actual API endpoint
    const [service, setService] = useState({});
    useEffect(() => {
      if (id) {
        axios
        .get(`http://localhost:4000/services/service/${id}`, { withCredentials: true })
        .then(response => {
          console.log("this is response", response.data);
          // Ensure the data is an array before setting it
            console.log(response.data)

            setService(response.data);
         
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
        
      }
    }, [id]);
  const servicesData = {
    serviceName: "Peinture",
    serviceDescription: "Si vous recherchez des services de peinture, notre site web propose une liste de peintres professionnels locaux, avec les détails des services qu’ils offrent ainsi que leurs coordonnées pour vous aider à transformer vos espaces.",
    servicePhoto: "../../public/peintre1.jpg",
    artisan:[
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },{
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },
      {
        name:"samir",
        fname:"boudjema",
        wilaya:"bejaia",
        service:"peintre",
        photo1:"../../public/utilisateur1.jpg",
        photo2:"../../public/peintre2.jpg"
      },
    ] 
  };

  return (
    <>
      <SectionOne data={service} />
      <SectionTwo data={servicesData} />
      <SectionThree data={servicesData} />
    </>
  );
};

export default ServicePage;
