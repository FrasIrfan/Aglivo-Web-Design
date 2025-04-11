'use client';

import React from 'react';

const TextDisplay = ({ items }) => {
  return (
    <div className="flex justify-center space-x-8">
      {items.map((item, index) => (
        <div 
          key={index}
          className="text-white text-2xl font-bold animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default TextDisplay; 