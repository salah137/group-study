"use client"
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
