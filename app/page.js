"use client"
import {useState, useEffect, useRef} from "react";
import Typewriter from "./components/typewrite";
import Nav from "./components/nav.component";
import Proyects from "./components/proyect.component";
import Link from "next/link";


export default function Home() {
  const [showState,setShowState] = useState(false);
  const [transitionState,setTransitionState] = useState("opacity-0");
  
  return (
    <>

    <Nav setShowState={setShowState} setTransitionState={setTransitionState}/>
    {showState ?
    <>
      <div className={`sm:ml-0 transition-opacity duration-500 ease-in-out m-auto`}>
        <h5 className={`text-white pt-10 sm:pt-5 text-center text-4xl sm:text-6xl mb-3 sm:mb-4`}>Proyectos</h5>
        <div className="flex ms:justify-center flex-wrap sm:flex-nowrap">
          <Proyects
          text={"Sistema de notas"}
          textContent={"Nodemaster es un sistema de registro de notas que maneja un servidor para el registro y inicio de sesión con el fin de que los usuarios puedra crear y eliminar sus notas de una base de datos hosteado en MongoDB"} 
          id={"note"} 
          trasitionProp={transitionState}
          img={"/Screenshot 2024-07-21 110238.png"}/>
        <Proyects
          text={"ATS"}
          textContent={"ATS es un sistema de administración de pagos atraves de un ecommerce para el registro de clientes, el manejo y administración de ganancias con el fin de tener un seguro ante los pagos atraves de pagos falsos o estafas ya que cuenta con una integración de una REST Api para la validación de pagos en el banco de la empresa de seguridad industrial"}
          id={"ats"}
          trasitionProp={transitionState}
          img={"/Screenshot 2024-07-22 151931.png"}/>
        <Proyects
          text={"Reciclaje"}
          textContent={"Este proyecto es una pagina web realizada para la campaña ambientalista de mi universidad con el fin de que los estudiantes conozcan las ventajas del reciclaje en la universidad y su vida diaria."}
          id={"recycle"}
          trasitionProp={transitionState}
          img={"/Screenshot 2024-08-05 235214.png"}
        /> 
        </div>
      </div>
        </>:<Typewriter/>}
      <footer className="text-base text-white flex items-end ">
        <Link href="https://github.com/Keidevk">©2024 Keinner Vera GitHub</Link>
      </footer>
    </>
  );
}
