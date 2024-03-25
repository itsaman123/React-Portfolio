import React, { useState, useEffect } from 'react';
import './myprojects.css';
// import projectsData from '../../projects.json';
import projectsData from '../../projects.json';

const Myprojects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section id='myprojects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
      {projects.map((project) => (
  <article key={project.id} className='portfolio__item'>
    <div className="portfolio__item-image">
      <img src={project.image} alt={project.title} />
    </div>
    <h3>{project.title}</h3>
    <small className='text-light'>{project.description}</small>
    <div className="portfolio__item-cta">
      <a href={project.githubLink} target="_blank" rel='noreferrer' className='btn'>Github</a>
      {project.websiteLink && <a href={project.websiteLink} target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>}
    </div>
  </article>
))}

      </div>
    </section>
  );
}

export default Myprojects;
