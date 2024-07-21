"use client"
import Hero from "./hero";
import { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import gsap from "gsap";
import Image from "next/image";
import img from "../app/assets/image/logo.png"
import { IoMdAdd } from "react-icons/io";
export default function Home() {
  const [toShow, setToShow] = useState<any>(false)

  const [chatOpned, setChatOpned] = useState(false)
  const [showChanales, setShow] = useState(false)

  useEffect(
    () => {
      if (localStorage.getItem("id")) {
        setToShow(false)
      } else {
        setToShow(true)
      }
    }, []
  )
  return <>
    {toShow ? <Home /> :

      <main className="h-dvh bg-[#7C98C6]">
        <div className="h-dvh w-full bg-[#2856A3] lg:w-[30vw]" id="groupe-chat">
          <div className=" h-dvh bg-[#F1E6B8] w-[15vh] rounded-lg z-0 p-2 flex flex-col items-center lg:w-[10vw]" id="chanels" onClick={
            () => {
              const t = gsap.timeline()
              if (!showChanales) {
                t.to("#chanels", {
                  width: window.screen.width < 800 ? "100vw" : "30vw",
                })
                t.to("#arrow", {
                  display: "none",
                })
                t.to(".groupe-title", {
                  display: "inline",
                }
                )
                setShow(true)
              } else {
                t.to("#groupe-title", {
                  display: "none"
                }
                )
                t.to("#chanels", {
                  width: window.screen.width < 800 ? "20vw" : "10vw"
                })


                if (window.screen.width < 800) {
                  t.to(
                    "#arrow",
                    {
                      display: "inline"
                    }
                  )
                }

                setShow(false)
              }
            }
          }>
            {
              [1, 2, 3, 4, 5].map(
                (e) => <div className="flex flex-row justify-center items-center hover:bg-[#8a8261] w-full">
                  <Image alt="dd" src={img} className="w-[10vw] rounded-[50%] bg-black h-[10vw] mt-3 lg:w-[5vw] lg:h-[5vw]"></Image>
                  <h2 className="font-black hidden m-2 groupe-title" id="groupe-title">Hi hi H Ihih</h2>
                </div>

              )
            }
          </div>
          <BsFillArrowRightSquareFill className="text-[#F1E6B8] text-4xl absolute right-[0] top-1/2 z-1 lg:hidden" onClick={
            () => {
              const t = gsap.timeline()

              if (!chatOpned) {
                t.to("#chanels", {
                  width: 0
                })

                t.to(
                  "#groupe-chat",
                  {
                    width: 0
                  }
                )

                setChatOpned(true)
              } else {
                t.to(
                  "#groupe-chat",
                  {
                    width: "100vw"
                  }
                )
                t.to("#arrow", {
                  right: 0,
                })

                t.to("#chanels", {
                  width: window.screen.width < 800 ? "20vw" : "10vw",
                })
                setChatOpned(false)
              }
            }
          } id="arrow" />

        </div>
        <button className="absolute bottom-0 right-0 bg-[#F1E6B8] p-5 m-2 rounded-lg text-2xl">
          <IoMdAdd />

        </button>
      </main>
    }
  </>
}
