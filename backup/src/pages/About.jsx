import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about our mission and values
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are passionate about creating beautiful and functional digital experiences. Our team of experts works tirelessly to deliver innovative solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 