import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Aglivo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your Trusted Software Development Partner
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">Custom web solutions for your business</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile Apps</h3>
              <p className="text-gray-600 mb-6">Native and cross-platform applications</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-6">Scalable cloud infrastructure</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 