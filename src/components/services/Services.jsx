import React from 'react';
import ServiceCard from './ServiceCard';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios"
import { GiKitchenTap } from "react-icons/gi";

function Services({ data }) {
  console.log(data)

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/services/service" ,{ state: { id } })
  }

  
  return (
    <div className="container py-16">
      <h1 className="title mb-14">Découvrez nos services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((service, index) => (
          <ServiceCard
           
            key={index}
            icon= {<GiKitchenTap size={45} />}
            title={service.nom}
            description={service.description}
            onClick={() => handleClick(service.id)}
            
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
