import React from 'react'
import ProjCard from './ProjCard'
function ActProject({proj}) {
  return (
    <div className='container pb-16 '>
     <h1 className='title'>Mes projets</h1>   
     <div className="py-10 flex flex-col items-center gap-10">
        {proj.map((projet, index) => (
          <ProjCard
            key={index}
            title={projet.title}
            sdate={projet.startDate}
            edate={projet.endDate}
            status={projet.status}
          />
        ))}
      </div>
    </div>
  )
}

export default ActProject
