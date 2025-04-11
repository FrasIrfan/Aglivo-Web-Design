'use client';

import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your email submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-gray-800 bg-opacity-70 border-gray-700 text-white placeholder-gray-400 rounded-full px-6 py-6 w-full md:w-2/3"
        required
      />
      <button 
        type="submit" 
        className="bg-aglivo-blue hover:bg-blue-600 text-white rounded-full px-8 py-6 font-medium"
      >
        Get Free Trial
      </button>
    </form>
  );
};

export default EmailForm; 