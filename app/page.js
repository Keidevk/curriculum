"use client"
import { useState, useEffect, useRef} from "react";
import Typewriter from "./components/typewrite";
import Nav from "./components/nav.component";
import Proyects from "./components/proyect.component";


export default function Home() {
  const [showState,setShowState] = useState(false);
  const [transitionState,setTransitionState] = useState("opacity-0");
  const imageRef = useRef(null)

  
  useEffect(() => {
    if(window.screen.availHeight > 700){
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
    }
}, [showState]);

  return (
    <>
     <Nav setShowState={setShowState} setTransitionState={setTransitionState}/>
    <main>
      {showState ?
      <>
      <div className={`${transitionState} ml-24 sm:ml-0 transition-opacity duration-500 ease-in-out h-screen w-100vh m-auto`}>
        <h5 className={`w-100vh text-white pt-10 text-center text-8xl sm:text-4xl`}>Proyectos</h5>
        <div className="flex py-20 px-32 ms:justify-center flex-wrap">
        <Proyects 
          text={"Sistema de notas"}
          textContent={"Nodemaster es un sistema de registro de notas que maneja un servidor para el registro y inicio de sesión con el fin de que los usuarios puedra crear y eliminar sus notas de una base de datos hosteado en MongoDB"} 
          ImageRefProp={imageRef} 
          trasitionProp={transitionState}/>
        <Proyects
        text={"ATS"}
        textContent={"ATS es un sistema de administración de pagos atraves de un ecommerce para el registro de clientes, el manejo y administración de ganancias con el fin de tener un seguro ante los pagos atraves de pagos falsos o estafas ya que cuenta con una integración de una REST Api para la validación de pagos en el banco de la empresa de seguridad industrial"}
        imageRefProp={imageRef}
        trasitionProp={transitionState}/>
        </div>
      </div>
      </>
      :<Typewriter setShow={setShowState}/>}
    </main>
    </>
  );
}
