import React from 'react';

const Button = ({ text, active = false }) => {
    return (
      <button 
        className={`px-4 py-1.5 rounded-lg whitespace-nowrap text-sm font-medium ${
          active 
            ? 'bg-black text-white' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        {text}
      </button>
    );
  };

export default Button;