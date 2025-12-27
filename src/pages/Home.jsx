import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificationsSection from '../components/CertificationsSection';
import InternshipsSection from '../components/InternshipsSection';
import TechStackCarousel from '../components/TechStackCarousel';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { projects, certifications, internships } from '../assets.js';

const Home = () => {
  

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      
      <HeroSection featuredProject={projects[0]} />
      
      {projects && (
        <ProjectsSection projects={projects} />
      )}
      
      {certifications && (
        <CertificationsSection certifications={certifications} />
      )}
      
      {internships && (
        <>
          <InternshipsSection 
            title="Internships" 
            id="internships" 
            internships={internships}
            filter={internship => !internship.company.toLowerCase().includes('activity') && !internship.role.toLowerCase().includes('activity')}
          />
        </>
      )}
      
      <TechStackCarousel />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Home;
