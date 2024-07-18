"use client"
import Image from "next/image";
import logo from "../app/assets/image/logo.png"
import hero from "../app/assets/image/hero.png"
import Hero from "./hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [toShow,setToShow] = useState<any>()
  useEffect(
    ()=>{
      if (localStorage.getItem("id")){

      }else {
        setToShow(Hero())
      }
    },[]
  )
  return <>
    {toShow}
  </>
}
