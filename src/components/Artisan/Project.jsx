import React from 'react'
import ProjectCard from './ProjectCard'
function Project({projet}) {
  return (
    <div className='container pb-16'>
     <h1 className='title'>Mes projets</h1>   
     <div className="py-10 flex flex-col items-center gap-10">
        {projet.map((projet, index) => (
          <ProjectCard
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

export default Project
