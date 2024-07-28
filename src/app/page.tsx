"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Hero from "./hero"
export default function page() {
    const router = useRouter()
    useEffect(
        () => {
            if (localStorage.getItem("id") && localStorage.getItem("token")){
                router.push("/home")
            }
        }
    )
    return localStorage.getItem("id") && localStorage.getItem("token")?  <></> : <Hero/> 
}