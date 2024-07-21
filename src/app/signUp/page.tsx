"use client"

import "../globals.css"
import image from "../assets/image/auth.png"
import Image from "next/image"
import { useState } from "react"
import gsap from "gsap"
import {useRouter} from "next/navigation"

export default function page() {
    const router = useRouter()

    const [level, setLevel] = useState(1)
    const [check, setCheck] = useState(false)
    const [user, setUser] = useState<any>({
        name: "",
        email: "",
        password: "",
        confirmed: "",
        language: "",
        study: "",
        interests: ""
    })

    return <main className="bg-[#2856A3] w-full h-dvh flex flex-col justify-center items-center lg:flex-row lg:justify-around" >
        <Image src={image} alt="img" className="w-2/3 lg:w-1/3" id="img" />
        <form className="flex flex-col h-2/3 justify-around items-center ">

            <span id="f-1" className="flex flex-col h-2/3 justify-around items-center w-[50vw]">
                <h1 className="text-white text-4xl font-black">Find a Group</h1>
                <div className = "w-full">
                    <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md" placeholder="your name" type="name" value={user.name} onChange={(e) => {
                        const { email, password, confirmed, language, study, interests } = user
                        setUser(
                            {
                                name: e.target.value,
                                email, password, confirmed, language, study, interests
                            }
                        )
                    }}></input>
                    {
                        check && !user.name && <h3 className="text-red-700 text-left">required field</h3>
                    }</div>

                <div className = "w-full">
                    <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md" placeholder="your email" type="email" value={user.email} onChange={(e) => {
                        const { name, password, confirmed, language, study, interests } = user
                        setUser(
                            {
                                email: e.target.value,
                                name, password, confirmed, language, study, interests
                            }
                        )
                    }}></input>
                    {
                        check && !user.email && <h3 className="text-red-700 text-left">required field</h3>
                    }</div>

                <div className = "w-full">
                    <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md" placeholder="your password" type="password" value={user.password} onChange={(e) => {
                        const { name, email, confirmed, language, study, interests } = user
                        setUser(
                            {
                                password: e.target.value,
                                name, email, confirmed, language, study, interests
                            }
                        )
                    }} ></input>
                    {
                        check && !user.password && <h3 className="text-red-700 text-left">required field</h3>
                    }</div>

                <div className = "w-full">
                    <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md" placeholder="confirme password " type="password" value={user.confirmed} onChange={(e) => {
                        const { name, email, password, language, study, interests } = user
                        setUser(
                            {
                                confirmed: e.target.value,
                                name, password, email, language, study, interests
                            }
                        )
                    }}></input>
                    {
                        check && !user.confirmed && <h3 className="text-red-700 text-left	">required field</h3>
                    }</div>
            </span>

            <span id="f-2" className="flex-col h-2/4   items-center hidden w-[50vw]">

                <div className = "w-full">
                    <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md mt-10" placeholder="your first language" type="text" value={user.language} onChange={(e) => {
                        const { name, email, password, confirmed, study, interests } = user
                        setUser(
                            {
                                language: e.target.value,
                                name, password, confirmed, email, study, interests
                            }
                        )
                    }}></input>
                    {
                        check && !user.language && <h3 className="text-red-700 text-left">required field</h3>
                    }</div>

                <div className = "w-full">
                    <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md mt-10" placeholder="what do you study" type="text" value={user.study} onChange={(e) => {
                        const { name, email, password, confirmed, language, interests } = user
                        setUser(
                            {
                                study: e.target.value,
                                name, password, confirmed, language, email, interests
                            }
                        )
                    }}></input>
                    {
                        check && !user.study && <h3 className="text-red-700 text-left">required field</h3>
                    }</div>

                <div className = "w-full">
                    <input className="h-[5vh] w-full border-none outline-none p-2 rounded-md mt-10" placeholder="your interests" type="text" value={user.interests} onChange={(e) => {
                        const { name, email, password, confirmed, language, study } = user
                        setUser(
                            {
                                interests: e.target.value,
                                name, password, confirmed, language, study, email
                            }
                        )
                    }}></input>
                    {
                        check && !user.interests && <h3 className="text-red-700 text-left">required field</h3>
                    }</div>
            </span>

            <div className="h-[5vh] w-full bg-[#F1E6B8] font-black rounded-lg text-2xl text-[#2856A3] text-center flex justify-center items-center hover:cursor-pointer" onClick={async () => {
                const { name, email, password, confirmed, language, study, interests } = user
                setCheck(true)
                if (level == 1 && name && email && password && confirmed && confirmed == password) {
                    var tl = gsap.timeline();

                    gsap.fromTo("#img", {
                        x: 20
                    }, {
                        x: -30,
                        ease: "back.out"
                    }
                    )

                    tl.to("#f-1", {
                        x: -150,
                        display: "none",
                        duration: 0.5
                    })

                    gsap.to("#ball", {
                        backgroundColor: "#7C98C6",
                        duration: 2

                    })

                    tl.fromTo("#f-2",
                        {
                            x: 10,
                            display: "none"
                        }, {
                        x: 0,
                        display: "flex",
                        ease: "slow"
                    }
                    )
                    setLevel(2)
                    setCheck(false)

                } else {
                    //group-study/src/app/api/auth/signUp
                    if (name && email && password && confirmed && confirmed == password && language && study && interests) {
                        let res = await fetch("http://localhost:3000/api/auth/signUp", {
                            method: "POST",
                            body: JSON.stringify({
                                name, email, password, confirmed, language, study, interests
                            })
                        })
                        const data = (await res.json());
                        if (data["status"] == "done"){
                            localStorage.setItem("id",data["jwt"])
                            router.replace("/")
                        }
                    }
                }
            }
            }>
                {
                    level == 1 ? "next" : "done"
                }
            </div>
            <div className="flex w-[10vw] justify-around lg:w-[5vw] bg-#F1E6B8">
                <div className="h-[2vh] w-[2vh] rounded-[50%] bg-[#F1E6B8]" id="ball"></div>
                <div className="h-[2vh] w-[2vh] rounded-[50%] bg-[#F1E6B8]"></div>

            </div>
        </form>
    </main>
}
