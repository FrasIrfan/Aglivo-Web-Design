'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 w-full bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/assets/logos/Aglivo Logo(large).png"
              alt="Aglivo Logo"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-white text-2xl font-bold hidden">AGLIVO</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className={`nav-link uppercase text-sm font-medium ${
              activeLink === 'HOME' ? 'active' : ''
            }`}
            onClick={() => handleLinkClick('HOME')}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={`nav-link uppercase text-sm font-medium ${
              activeLink === 'ABOUT' ? 'active' : ''
            }`}
            onClick={() => handleLinkClick('ABOUT')}
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className={`nav-link uppercase text-sm font-medium ${
              activeLink === 'SERVICES' ? 'active' : ''
            }`}
            onClick={() => handleLinkClick('SERVICES')}
          >
            SERVICES
          </Link>
          <Link
            href="/projects"
            className={`nav-link uppercase text-sm font-medium ${
              activeLink === 'PROJECTS' ? 'active' : ''
            }`}
            onClick={() => handleLinkClick('PROJECTS')}
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className={`nav-link uppercase text-sm font-medium ${
              activeLink === 'CONTACT' ? 'active' : ''
            }`}
            onClick={() => handleLinkClick('CONTACT')}
          >
            CONTACT
          </Link>
        </div>

        <button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 font-medium">
          Let's Talk
        </button>
      </div>
      <style jsx>{`
        .nav-link {
          position: relative;
          color: white;
          padding: 10px 20px;
          transition: color 0.3s;
        }
        .nav-link:hover,
        .nav-link.active {
          color: gray;
        }
        .nav-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 30px;
          border-radius: 15px;
          background-color: rgba(255, 255, 255, 0.2);
          z-index: -1;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
