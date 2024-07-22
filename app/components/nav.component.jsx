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
        <nav className="w-100vh grid column-300 bg-white">
            <div className=" text-gray-700 h-min">
                <h1 className={`${roboto.className} sm:text-3xl text-5xl justify-center mr-4 pl-6 flex my-5 `}>Keinner Vera</h1>  
            </div>
            <div className="m-0 p-0 ">
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