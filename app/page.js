"use client"
import Image from "next/image";
import { useState, useEffect, useRef} from "react";

import {Bebas_Neue, Roboto} from "next/font/google"
import Typewriter from "./components/typewrite";
const roboto = Roboto({subsets:["latin"], weight:"400"})
const bebas_Neue = Bebas_Neue({subsets:["latin"], weight:"400" });

export default function Home() {
  const [showState,setShowState] = useState(false);
  const [transitionState,setTransitionState] = useState("opacity-0");

  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 60) {
            setShowState(true);
            setTimeout(()=>{setTransitionState(" ")},400)
        } else {
            setShowState(false);
            setTransitionState("opacity-0"); 
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [showState]);

  return (
    <div>
    <nav className="w-100vh grid column-300 bg-white">
      <div className=" text-gray-700 h-min">
        <h1 className={` ${bebas_Neue.className} sm:text-3xl text-5xl justify-center mr-4 pl-6 flex my-5 `}>Keinner Vera</h1>  
      </div>
      <div className="m-0 p-0 ">
        <div className="h-full w-full bg-white">
        <div className={`${roboto.className} flex-row sm:text-2xl text-4xl mb-5 text-center pt-5`}>
          <a className="pr-10 hover:animate-pulse" onClick={()=>{setShowState(false)}} href={"#"}>Home</a>
          <a className="pr-10 hover:animate-pulse" onClick={()=>{setShowState(true); 
            setTimeout(()=>{setTransitionState(" ")},400)}} href={"#"}>Proyectos</a>
          <a className="pr-10 hover:animate-pulse" onClick={()=>{setShowState(true);
            setTimeout(()=>{setTransitionState(" ")},400)}} href={"#"}>Habilidades</a>
        </div>
        </div> 
      </div>
    </nav>
    <main>
      {showState ?
      <>  
        <div className={`${transitionState} ml-24 sm:ml-0 transition-opacity duration-500 ease-in-out h-screen w-100vh m-auto`}>
          <h5 className={`${roboto.className} w-100vh text-white pt-10 text-center text-8xl sm:text-4xl`}>Proyectos</h5>
          <div className="flex py-20 px-32">
            <div className="w-96 h-min text-white border-t-2 border-white">
              <p className="text-center p-2 text-6xl sm:text-lg font-semibold">Sistema de notas</p>
              <Image ref={imageRef} className="justify-center transition-transform duration-300" src="/Screenshot 2024-07-21 110238.png" alt="Nodemaster" width={400} height={200} onClick={()=>{
                if(imageRef.current.style.transform != "scale(2)"){
                  imageRef.current.style.transform = "scale(2)"
                }else{
                  imageRef.current.style.transform = "scale(1)"
                }
                
              }}/>
              <p className="text-3xl sm:text-lg pb-2 border-b-2 border-white">Nodemaster es un sistema de registro de notas que maneja un servidor para el registro y inicio de sesión con el fin de que los usuarios puedra crear y eliminar sus notas de una base de datos hosteado en MongoDB</p>
            </div>
          </div>
        </div>
        </>:<Typewriter setShow={setShowState}/>}
    </main>
    </div>
  );
}
