"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {Bebas_Neue, Roboto} from "next/font/google"
import Typewriter from "./components/typewrite";
const roboto = Roboto({subsets:["latin"], weight:"400"})
const bebas_Neue = Bebas_Neue({subsets:["latin"], weight:"400" });
export default function Home() {
  const [showState,setShowState] = useState(false);
  const [transitionState,setTransitionState] = useState("opacity-0");


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
    <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <nav className="grid column-300 bg-white">
      <div className=" text-gray-700 h-min">
        <h1 className={` ${bebas_Neue.className} text-3xl justify-center mr-4 pl-6 flex my-5 `}>Keinner Vera</h1>  
      </div>
      <div className="m-0 p-0 ">
        <div className="h-full w-full">
        <div className={`${roboto.className} flex-row text-2xl mb-5 text-center pt-5`}>
          <a className="pr-10 hover:animate-pulse" onClick={()=>{setShowState(false)}} href={"#"}>Home</a>
          <a className="pr-10 hover:animate-pulse" onClick={()=>{setShowState(true);
            setTimeout(()=>{setTransitionState(" ")},400)}} href={"#"}>Proyectos</a>
          <a className="pr-10 hover:animate-pulse" onClick={()=>{setShowState(true);
            setTimeout(()=>{setTransitionState(" ")},400)}} href={"#"}>Habilidades</a>
        </div>
        {/* <p>En resumen, soy un desarrollador web versátil con habilidades técnicas sólidas y una comprensión profunda del ecosistema web. Si tienes alguna pregunta específica o necesitas más detalles, no dudes en preguntar.</p> */}
        </div> 
      </div>
    </nav>
    <main>
      {showState ?
      <>  
        <div className={`${transitionState} transition-opacity duration-500 ease-in-out h-screen m-auto`}>
          <h5 className={`${roboto.className} text-white pt-10 text-center text-4xl`}>Proyectos</h5>
          <div className="flex py-20 px-32">
            <div className="w-96 h-min text-white border-t-2 border-white">
              <p className="text-center p-2 text-lg font-semibold">Sistema de notas</p>
              <Image className="justify-center" src="/Screenshot 2024-07-21 110238.png" alt="Nodemaster" width={400} height={200}/>
              <p className="pb-2 border-b-2 border-white">Nodemaster es un sistema de registro de notas que maneja un servidor para el registro y inicio de sesión con el fin de que los usuarios puedra crear y eliminar sus notas de una base de datos hosteado en MongoDB</p>
            </div>
          </div>
            {/* <li className="py-1 text-xl ">JavaScript: Tengo habilidades sólidas en JavaScript, que es un lenguaje fundamental para el desarrollo web. Puedo crear interacciones dinámicas en el navegador y trabajar con frameworks como React y Next.js.</li> */}
            {/* <li className="py-1 text-xl ">Next.js: He trabajado con Next.js, un framework de React que facilita la creación de aplicaciones web rápidas y escalables. Puedo desarrollar páginas estáticas y dinámicas utilizando sus características avanzadas.</li> */}
            {/* <li className="py-1 text-xl ">Enlaces de API: Puedo conectar aplicaciones web con servicios externos mediante APIs. Esto incluye la obtención y envío de datos a través de solicitudes HTTP.</li> */}
            {/* <li className="py-1 text-xl ">Pasarelas de pago: Tengo conocimientos en integración de pasarelas de pago, lo que permite procesar transacciones seguras en línea. Esto es crucial para aplicaciones de comercio electrónico.</li> */}
            {/* <li className="py-1 text-xl ">Registro de inventario: Puedo diseñar sistemas para gestionar inventarios, realizar seguimiento de productos y controlar existencias.</li> */}
            {/* <li className="py-1 text-xl ">Estilización en CSS y Tailwind: Soy capaz de crear diseños atractivos utilizando CSS y puedo aprovechar la eficiencia de Tailwind CSS para agilizar el proceso de estilización.</li> */}
            {/* <li className="py-1 text-xl ">Optimización SEO: Entiendo cómo optimizar sitios web para motores de búsqueda (SEO). Esto implica estructurar correctamente el contenido, usar metaetiquetas y mejorar la velocidad de carga.</li> */}
            {/* <li className="py-1 text-xl ">Manejo de agendas con APIs web como Google Calendar: Puedo integrar calendarios en aplicaciones web utilizando APIs, como Google Calendar. Esto permite programar eventos, recordatorios y citas.</li> */}
        </div>
        </>:<Typewriter setShow={setShowState}/>}
    </main>
    </div>
  );
}
