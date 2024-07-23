export default function Nav({setTransitionState,setShowState}){

    function setStateFunction(){
        setShowState(true); 
        setTimeout(()=>{
            setTransitionState(" ")
        },400)
    }
    return (
        <>
        <nav className="grid grid-cols-3 max-h-min text-gray-700 text-center text-lg bg-white sm:pb-5">
            <a className="font-semibold text-sm sm:text-4xl lg:text-6xl text-center sm:pr-10 hover:animate-pulse" onClick={()=>{setShowState(false)}}>Inicio</a>
            <a className="font-semibold text-sm sm:text-4xl lg:text-6xl text-center sm:pr-10 hover:animate-pulse" onClick={()=>{setStateFunction()}}>Proyectos</a>
            <a className="font-semibold text-sm sm:text-4xl lg:text-6xl text-center sm:pr-10 hover:animate-pulse" onClick={()=>{setStateFunction()}}>Habilidades</a>
        </nav>
        </>
    )
}