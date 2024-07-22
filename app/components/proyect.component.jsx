import Image from "next/image"
export default function Proyects({ImageRefProp,textContent,text}){
    function imageChange(){
        if(ImageRefProp.current.style.transform != "scale(2)"){
            ImageRefProp.current.style.transform = "scale(2)"
        }else{
            ImageRefProp.current.style.transform = "scale(1)"
        }
    }
    return(
        <>
            <div className="ms:my-0 mt-0 mb-12 mx-3 w-96 h-min text-white border-t-2 border-white">
              <p className="text-center p-2 text-6xl sm:text-lg font-semibold">{text}</p>
              <Image ref={ImageRefProp} className="justify-center transition-transform duration-300" src="/Screenshot 2024-07-21 110238.png" alt="Nodemaster" width={400} height={200} onClick={()=>imageChange()}/>
              <p className="text-3xl sm:text-lg pb-2 border-b-2 border-white">{textContent}</p>
            </div>
        </>
    )
}