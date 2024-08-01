"use client";

import { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import gsap from "gsap";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { socket } from "../../socket";
import { PrismaClient } from "@prisma/client/extension";
import { IoSend } from "react-icons/io5";
import { useParams, useSearchParams } from 'next/navigation'


export default function Home() {
  const params = useParams<{ groupId: string }>()

  const [toShow, setToShow] = useState<any>(false);
  const [chatOpned, setChatOpned] = useState(false);

  useEffect(
    ()=>{
      (async ()=>{
        let res = await fetch(`http://localhost:3000/getGroupUsers?groupId=${params.groupId}`)

        console.log(await res.json());
        
      })()
    },[]
  )

  useEffect(() => {
    
    if (localStorage.getItem("token")) {
      if (socket.connected) {
        console.log('Socket connected');
        socket.on("receive-message", () => { })
      }

      setToShow(false);
    } else {
      setToShow(true);
    }
  }, []);

  return (
    <>
      {toShow ? <Home /> :
        <main className="h-dvh bg-[#7C98C6]">
          <div className="h-dvh w-full bg-[#2856A3] lg:w-[30vw]" id="groupe-chat">

          </div>
          {(chatOpned || window.screen.width > 800 ) &&
          <div className="absolute bottom-0 w-[100vw] right-0 flex lg:w-[70vw]" id = "input-mess">
            <input type='text' onChange={
              (e) => {
              }
            } className="w-[100%] outline-none p-2" />
            <button className="bg-[#F1E6B8] w-[12vw] h-[5vh] text-center border-[1px] border-solid border-black flex justify-center items-center hover:cursor-pointer hover:bg-[#8a8262] lg:w-[6vw]">
              <IoSend />
            </button>
          </div>}
          <button className="absolute bottom-10 right-0 bg-[#F1E6B8] p-5 m-2 rounded-lg text-2xl">
            <IoMdAdd />
          </button>
        </main>
      }
    </>
  );
}
