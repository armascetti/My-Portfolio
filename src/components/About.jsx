import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <>
      <div className='about-container'>
        <div className='about-card'>
          <h2>Technical</h2>
          <p>
            Full-stack engineer with experience building web applications,
            integrating APIs, and delivering user-focused solutions. My education
            and crisis intervention background helps me solve problems clearly
            and collaborate effectively.
          </p>
        </div>
        <div className='about-card alt'>
          <h2>Non-Technical</h2>
          <p>
            Former special education teacher and proud mother. Working in the
            autism and special needs community taught me patience, empathy, and
            creative problem-solving.
          </p>
          <p>
            I enjoy family time, the outdoors, hiking, exercising, and traveling.
          </p>
        </div>
      </div>
    </>
  )
}