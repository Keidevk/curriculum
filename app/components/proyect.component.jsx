import Image from "next/image"
import { useEffect } from "react"
export default function Proyects({id,textContent,text,img}){
    
    return(
        <>
            <div className="ms:my-0 mt-0 mb-12 mx-3 w-96 h-min text-white border-t-2 border-white">
              <p className="text-center p-2 text-6xl sm:text-lg font-semibold">{text}</p>
              <Image id={id} className="justify-center transition-transform duration-300" src={img} alt="Nodemaster" width={400} height={200} onClick={()=>{
                const img = document.getElementById(`${id}`)
                if(img.style.transform != "scale(1.9)"){
                  img.style.transform = "scale(1.9)"  
                }else{
                  img.style.transform = "scale(1)"
                }
              }}/>
              <p className="text-3xl sm:text-lg pb-2 border-b-2 border-white">{textContent}</p>
            </div>
        </>
    )
}