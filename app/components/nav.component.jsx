import {roboto} from "@/app/ui/fonts"

export default function Nav({setTransitionState,setShowState}){

    function setStateFunction(){
        setShowState(true); 
        setTimeout(()=>{
            setTransitionState(" ")
        },400)
    }
    return (
        <>
        <nav className="sm:w-100vh grid column-300 sm:columns-4xs bg-white">
            <div className=" text-gray-700  sm:h-min p-0">
                <h1 className={`${roboto.className} shadow-none outline-none border-none text-5xl justify-center mr-4 pl-6 flex my-5 sm:bg-transparent sm:text-3xl `}>Keinner Vera</h1>  
            </div>
            <div className="m-0 p-0 shadow-none outline-none border-none">
                <div className="h-full w-full bg-white">
                <div className={`flex-row sm:text-2xl text-4xl mb-5 text-center pt-5`}>
                    <a className="pr-10 hover:animate-pulse" onClick={()=>{setShowState(false)}} href={"#"}>Inicio</a>
                    <a className="pr-10 hover:animate-pulse" onClick={()=>setStateFunction()} href={"#"}>Proyectos</a>
                    <a className="pr-10 hover:animate-pulse" onClick={()=>setStateFunction()} href={"#"}>Habilidades</a>
                </div>
                </div> 
            </div>
        </nav>
        </>
    )
}