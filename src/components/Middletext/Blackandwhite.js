import React from 'react';

const BlackAndWhiteText = ({ text }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-white opacity-50"></div>
      <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-t from-white to-black">{text}</div>
    </div>
  );
};

export default BlackAndWhiteText;
