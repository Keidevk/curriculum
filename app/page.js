"use client"
import {useState, useEffect, useRef} from "react";
import Typewriter from "./components/typewrite";
import Nav from "./components/nav.component";
import Proyects from "./components/proyect.component";
import Link from "next/link";


export default function Home() {
  const [showState,setShowState] = useState(false);
  const [transitionState,setTransitionState] = useState("opacity-0");
  
  return (
    <>
    <Typewriter/>
    </>
  );
}
