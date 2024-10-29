import Image from "next/image"
export default function Proyects({id,textContent,text,img}){

    return(
        <>
            <div className="text-white border-y-2 mb-5 mx-5 sm:w-1/2 ">
              <p className=" text-center font-semibold text-xl sm:text-4xl sm:py-4">{text}</p>
              <Image id={id} className="m-auto transition-transform duration-300" src={img} alt="Nodemaster" width={300} height={100} onClick={()=>{
                if(window.screen.availWidth>1024){
                  const img = document.getElementById(`${id}`)
                  if(img.style.transform != "scale(1.9)"){
                    img.style.transform = "scale(1.9)"  
                  }else{
                    img.style.transform = "scale(1)"
                  }
                }
              }}/>
              <p className="text-xl pt-2 sm:pt-4 mb-4">{textContent}</p>
            </div>
        </>
    )
}