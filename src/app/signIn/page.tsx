"use client"

import "../globals.css"
import image from "../assets/image/auth.png"
import Image from "next/image"
import { useState } from "react"
import gsap from "gsap"


export default function page() {

    const [user, setUser] = useState<any>({
        email: "",
        password: "",
    })

    return <main className="bg-[#2856A3] w-full h-dvh flex flex-col justify-center items-center lg:flex-row lg:justify-around" >
        <Image src={image} alt="img" className=" w-2/3 lg:w-1/3 z-1" id="img" />
        <form className=" flex flex-col h-1/2 justify-around items-center z-0" >

            <h1 className="text-white text-4xl font-black">Find a Group</h1>

            <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md" placeholder="your email" type="email" value={user.email} onChange={(e) => {
                const { name, password, confirmed, language, study, interests } = user
                setUser(
                    {
                        email: e.target.value,
                        name, password, confirmed, language, study, interests
                    }
                )
            }}></input>
            <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md" placeholder="your password" type="password" value={user.password} onChange={(e) => {
                const { name, email, confirmed, language, study, interests } = user
                setUser(
                    {
                        password: e.target.value,
                        name, email, confirmed, language, study, interests
                    }
                )
            }} ></input>


            <div className="h-[5vh] w-full bg-[#F1E6B8] font-black rounded-lg text-2xl text-[#2856A3] text-center flex justify-center items-center hover:cursor-pointer" onClick={() => {}}>
                Done
            </div>
        </form>
    </main>
}
