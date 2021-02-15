import React from 'react';
import './styles.css';

export default function Projects(){

  return(
    
    <div className="project-container">
      <div className="project">
        <h3>E-Commerce</h3>
        <p>Description</p>
        <button className="btn">View Project</button>
        <button className="btn">View Repository</button>
      </div>
      <div className="project">
        <h3>HENRY App</h3>
        <p>Description</p>
        <button className="btn">View Project</button>
        <button className="btn">View Repository</button>
      </div>
    </div>
    
  )
}