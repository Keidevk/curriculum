"use client"
import React, { useState, useEffect } from 'react';
import "../globals.css";

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
  //relative sm:flex sm:justify-center my-10 sm:text-4xl text-6xl pl-40 w-100vh pt-60 sm:pl-20 text-white
  return (
  <>
  <div className='w-screen text-center text-3xl sm:text-7xl pt-20 sm:pt-60'>
    <h1 className="text-white">{text}</h1>
  </div>
  </>)
};

export default Typewriter;
