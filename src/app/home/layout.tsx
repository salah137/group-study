"use client";

import { Children, useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import gsap from "gsap";
import Image from "next/image";
import img from "../../app/assets/image/logo.png";
import { IoMdAdd } from "react-icons/io";
import { socket } from "../socket";
import { PrismaClient } from "@prisma/client/extension";
import { IoSend } from "react-icons/io5";
import Link from "next/link";

async function reciveMessage() {
    "use service"
    const prisma = new PrismaClient()
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [toShow, setToShow] = useState<any>(false);
    const [chatOpned, setChatOpned] = useState(false);
    const [showChanales, setShow] = useState(false);
    const [groupe, setGroupe] = useState()
    const [message, setMessage] = useState<string>()
    const [to, setTo] = useState()

    useEffect(
        () => {
            if (window.screen.width < 800)
                gsap.to(
                    "#content", {
                    display: "none"
                }
                )
        }, []
    )

    return (
        <>
            <main className="h-dvh bg-[#7C98C6]">
                <div className=" h-dvh w-full bg-[#2856A3] lg:w-[30vw] z-0" id="groupe-chat">
                    <div className=" h-dvh bg-[#F1E6B8] w-[15vh] rounded-lg z-0 p-2 flex flex-col items-center lg:w-[10vw]" id="chanels" onClick={() => {
                        const t = gsap.timeline();
                        if (!showChanales) {
                            console.log("Hiii");

                            t.to("#chanels", {
                                width: window.screen.width < 800 ? "100vw" : "30vw",
                            });
                            t.to(".groupe-title", {
                                display: "inline",
                            });
                            t.to("#arrow", {
                                display: "none",
                            });
                            setShow(true);
                        } else {
                            t.to(".groupe-title", {
                                display: "none"
                            });
                            t.to("#chanels", {
                                width: window.screen.width < 800 ? "20vw" : "10vw"
                            });
                            if (window.screen.width < 800) {
                                t.to("#arrow", {
                                    display: "inline"
                                });
                            }
                            setShow(false);
                        }
                    }}>
                        {[1, 2, 3, 4, 5].map((e) => (
                            <Link href={"/home/gdfg"}>
                                <div key={e} className="flex flex-row justify-center items-center hover:bg-[#8a8261] w-full">
                                    <Image alt="logo" src={img} className="w-[10vw] rounded-[50%] bg-black h-[10vw] mt-3 lg:w-[5vw] lg:h-[5vw]" />
                                    <h2 className="font-black hidden m-2 groupe-title">Hi hi H Ihih</h2>
                                </div>

                            </Link>
                        ))}
                    </div>
                    <BsFillArrowRightSquareFill className="text-[#F1E6B8] text-4xl absolute right-[0] top-1/2 z-1 lg:hidden" onClick={() => {
                        const t = gsap.timeline();
                        if (!chatOpned) {
                            t.to("#chanels", { width: 0 });
                            t.to("#groupe-chat", { width: 0 });
                            t.to("#input-mess", {
                                display: "flex",
                                duration: 1
                            })
                            t.to("#input-mess", {
                                display: "block"
                            })
                            t.to(
                                "#content", {
                                display: "block"
                            }
                            )
                            setChatOpned(true);
                        } else {
                            t.to(
                                "#content", {
                                display: "none"
                            }
                            )
                            t.to("#input-mess", {
                                display: "none"
                            })
                            t.to("#groupe-chat", { width: "100vw" });
                            t.to("#arrow", { right: 0 });
                            t.to("#chanels", { width: window.screen.width < 800 ? "20vw" : "10vw" });

                            setChatOpned(false);
                        }
                    }} id="arrow" />
                    {children}
                </div>
            </main>

        </>
    );
}

