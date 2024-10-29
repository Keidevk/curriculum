"use client"
import Proyects from "@/app/components/proyect.component";

export default function Project(){
    return (
        <>
        <div className={`sm:ml-0 transition-opacity duration-500 ease-in-out m-auto`}>
        <h5 className={`text-white pt-10 sm:pt-5 text-center text-4xl sm:text-6xl mb-3 sm:mb-4`}>Proyectos</h5>
        <div className="flex ms:justify-center flex-wrap sm:flex-nowrap">
          <Proyects
          text={"Sistema de notas"}
          textContent={"Nodemaster es un sistema de registro de notas que maneja un servidor para el registro y inicio de sesión con el fin de que los usuarios puedra crear y eliminar sus notas de una base de datos hosteado en MongoDB"} 
          id={"note"} 
          img={"/Screenshot 2024-07-21 110238.png"}/>
        <Proyects
          text={"ATS"}
          textContent={"ATS es un sistema de administración de pagos atraves de un ecommerce para el registro de clientes, el manejo y administración de ganancias con el fin de tener un seguro ante los pagos atraves de pagos falsos o estafas ya que cuenta con una integración de una REST Api para la validación de pagos en el banco de la empresa de seguridad industrial"}
          id={"ats"}
          img={"/Screenshot 2024-07-22 151931.png"}/>
        <Proyects
          text={"Reciclaje"}
          textContent={"Este proyecto es una pagina web realizada para la campaña ambientalista de mi universidad con el fin de que los estudiantes conozcan las ventajas del reciclaje en la universidad y su vida diaria."}
          id={"recycle"}
          img={"/Screenshot 2024-08-05 235214.png"}
        /> 
        </div>
      </div>
        </>
    )
}