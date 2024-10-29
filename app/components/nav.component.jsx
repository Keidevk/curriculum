import Link from "next/link";

//{setTransitionState,setShowState}
export default function Nav(){

    function setStateFunction(){
        setShowState(true); 
        setTimeout(()=>{
            setTransitionState(" ")
        },400)
    }
    return (
        <>
        <nav className="grid grid-cols-3 max-h-min text-gray-700 text-center text-lg bg-white sm:pb-5">
            <Link href="/" className="font-semibold text-2xl sm:text-4xl lg:text-6xl text-center sm:pr-10 hover:animate-pulse">Inicio</Link>
            <Link href="/project"className="font-semibold text-2xl sm:text-4xl lg:text-6xl text-center sm:pr-10 hover:animate-pulse">Proyectos</Link>
            <Link href="/about" className="font-semibold text-2xl sm:text-4xl lg:text-6xl text-center sm:pr-10 hover:animate-pulse">Sobre mi</Link>
        </nav>
        </>
    )
}