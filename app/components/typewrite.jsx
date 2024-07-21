"use client"
import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const originalText = 'Hola! Soy Keinner Vera, un apasionado desarrollador web';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < originalText.length) {
        setText(originalText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval); 
      }
    }, 100);
  }, []);

  return <h1 className="flex justify-center my-10 text-4xl h-screen pt-60 pl-2 text-white">{text}</h1>;
};

export default Typewriter;
