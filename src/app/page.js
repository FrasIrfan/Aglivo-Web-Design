import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Aboutus from '../components/Aboutus';
import TrustedPartners from '../components/TrustedPartners';
import CoreValuesSection from '../components/CoreValuesSection';
import ProjectsSection from '../components/ProjectsSection';
import ClientStoriesCarousel from '../components/ClientStoriesCarousel';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Aboutus />
      <TrustedPartners/>
      <CoreValuesSection />
      <ProjectsSection/>
      <ClientStoriesCarousel/>
      <ContactUs/>
      <Footer/>

    </div>
  );
}
