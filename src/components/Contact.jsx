import React from 'react';
import NavBar from './Navbar';
import '../styles/ContactInfo.css';
import ResumePdf from '../Documents/ArmascettiResume.pdf';

export default function Contact() {
  return (
    <>
      <NavBar />
      <section className="contact-section" id="contact">
  <p className="eyebrow">Contact</p>
  <h2>Let’s Connect</h2>

  <p>
    I’m open to software engineering opportunities, especially full-stack,
    AI-integrated, and cleared roles.
  </p>

    <div className="contact-links">
    <a href="mailto:armascetti@gmail.com">Email Me</a>
    <a href="https://www.linkedin.com/in/mandy-mascetti/" target="_blank" rel="noreferrer">
      LinkedIn
    </a>
    <a href="https://github.com/armascetti" target="_blank" rel="noreferrer">
      GitHub
    </a>
      <a href={ResumePdf} download="ArmascettiResume.pdf">
        Download Resume
      </a>
  </div>
</section>
    </>
  )
}