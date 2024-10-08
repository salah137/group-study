"use client";

import { useEffect, useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import gsap from "gsap";
import Image from "next/image";
import img from "../../app/assets/image/logo.png";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IoAdd } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [chatOpned, setChatOpned] = useState(false);
  const [showChanales, setShow] = useState(false);
  let [groups, setGroups] = useState([]);
  const [searching, setSearch] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [groupId,setId] = useState<any>()
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async () => {
      const userId = localStorage.getItem("id");
      const token = localStorage.getItem("token");

      if (userId && token) {
        const res = await fetch(
          `http://localhost:3000/api/groupe/getGroups?userId=${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              token: `${token}`,
            },
          },
        );
        console.log(userId);

        const data = await res.json();
        console.log(data);
        setGroups(data);
      }
    })();
  }, []);

  useEffect(() => {
    if (window.screen.width < 800)
      gsap.to("#content, .content", {
        display: "none",
      });
  }, []);

  return (
    <>
      <main className="h-dvh bg-[#7C98C6]">
        <div
          className="w-[60vw]  absolute top-0 right-0 bg-[#2856A3] h-[10vh] flex justify-center items-center] lg:w-[70vw]"
          id="search-bar"
        >
          <div
            className="w-[10vw] mt-3 bg-[#F1E6B8] text-center h-[10vw] rounded-lg flex justify-center items-center lg:w-[4vw] lg:h-[4vw]"
            id="search"
          >
            <FaSearch
              className="hover:cursor-pointer"
              onClick={() => {
                const tl = gsap.timeline();
                if (!searching && !animating) {
                  setAnimating(true);
                  tl.to("#search", {
                    width: "60vw",
                  });
                  tl.to("#input", {
                    width: "50vw",
                    paddingLeft: "5px",
                  });
                  setAnimating(false);
                  setSearch(true);
                } else if (!animating) {
                  setAnimating(true);
                  tl.to("#input", {
                    width: 0,
                  });

                  tl.to("#search", {
                    width: window.screen.width > 1000 ? "4vw" : "10vw",
                  });
                  setAnimating(false);
                  setSearch(false);
                }
              }}
            />
            <input
              className="bg-[#F1E6B8] outline-0 w-0"
              id="input"
              onChange={(e) => {
                if (e.target.value.length >= 0) {
                  router.push(`/home/search/${e.target.value}`);
                }
              }}
            ></input>
          </div>
        </div>

        <div
          className=" h-dvh w-full bg-[#2856A3] lg:w-[30vw] z-0"
          id="groupe-chat"
        >
          <div
            className=" h-dvh bg-[#F1E6B8] w-[15vh] rounded-lg z-0 p-2 flex flex-col items-center lg:w-[10vw]"
            id="chanels"
            onClick={() => {
              const t = gsap.timeline();
              if (!showChanales && !chatOpned) {

                if (window.screen.width < 800) {
                  t.to("#arrow", {
                    display: "none",
                  });
                  t.to("#search-bar", {
                    display: "none",
                  });
                }
                t.to(
                  ".groupe-list", {
                  display: "none"
                }
                )
                t.to("#chanels", {
                  width: window.screen.width < 800 ? "100vw" : "30vw",
                });


                t.to(".groupe-title", {
                  display: "inline",
                });

                setShow(true);
              } else if (!chatOpned) {

                t.to(".groupe-title", {
                  display: "none",
                });
                t.to("#chanels", {
                  width: window.screen.width < 800 ? "20vw" : "10vw",
                });
                if (window.screen.width < 800) {
                  t.to("#arrow", {
                    display: "inline",
                  });
                  t.to("#search-bar", {
                    display: "block",
                  });
                }
                t.to(
                  ".groupe-list", {
                  display: "flex"
                }
                )
                setShow(false);
              }
            }}
          >
            {groups ? (
              <div className="h-[75vh] overflow-y-scroll" id="groups">
                {groups.map((e: any) => (
                  <Link href={`/home/${e["id"]}`} className="w-full">
                    <div onClick={
                      async () => {
                        const res = await fetch(`http://localhost:3000/api/groupe/getGroupUsers?groupId=${e["id"]}`)
                        const data = await res.json()
                        setUsers(data)
                        setChatOpned(false)
                        setId(e["id"])
                      }
                    }
                      key={e["id"]}
                      className="flex flex-row justify-center items-center hover:bg-[#8a8261] w-[100%]"
                    >
                      <Image
                        alt="logo"
                        src={e["profile"]}
                        className="w-[10vw] rounded-[50%] bg-black h-[10vw] mt-3 lg:w-[5vw] lg:h-[5vw]"
                        width={100}
                        height={100}
                      />
                      <h2 className="font-black hidden m-2 groupe-title">
                        {e["groupName"]}
                      </h2>
                    </div>
                  </Link>
                ))}{" "}
              </div>
            ) : (
              <></>
            )}

            {!chatOpned && (
              <div className="absolute bottom-0">
                <Link
                  href={"/home/createGroupe"}
                  className="m-3 flex justify-center items-center bottom-0 bg-[#2856A3] w-[10vw] h-[10vw] rounded-[50%] cursor-pointer hover:bg-[#5381d1] lg:w-[7vw] lg:h-[7vw]"
                >
                  <IoAdd className="text-[#F1E6B8]  text-4xl" />
                </Link>
                <Link
                  href={"/home/allGroupes"}
                  className="m-3 flex justify-center items-center bottom-0 bg-[#2856A3] w-[10vw] h-[10vw] rounded-[50%] cursor-pointer hover:bg-[#5381d1] lg:w-[7vw] lg:h-[7vw]"
                >
                  <MdOutlineExplore className="text-[#F1E6B8]  text-4xl" />
                </Link>
              </div>
            )}
          </div>

          {users && groupId && <div className="absolute w-[80vw] left-[20vw] top-[15vh] lg:left-[10vw] flex flex-col groupe-list lg:w-[20vw]  ">
            <div className="h-[10vh]  flex items-center justify-start border-b-2 border-b-black cursor-pointer" onClick={
              ()=>{
                router.push(`/home/${groupId}/generale`)

              }
            }>
                    <Image src={"https://firebasestorage.googleapis.com/v0/b/prepare-91cd7.appspot.com/o/images%2Fdefault-group.png?alt=media&token=b9eb4e44-9797-4b3d-86ca-64e9ce1a792c"} alt="pr" width={200} height={200} className="w-[15vw] h-[15vw] lg:w-[5vw] lg:h-[5vw] rounded-[50%] m-2" />
                    <h2>general chat</h2>
                  </div>
            {
              users.map(
                (e) => {
                  return <div onClick={
                    ()=>{
                      
                      router.push(`/home/${groupId}/${e["userId"]}`)
                    }
                  } className="h-[10vh] chat  flex items-center justify-start border-b-2 border-b-black cursor-pointer">
                    <Image src={e["profile"]} alt="pr" width={200} height={200} className="w-[15vw] h-[15vw] lg:w-[5vw] lg:h-[5vw] rounded-[50%] m-2" />
                    <h2>{e["name"]}</h2>
                  </div>
                }
              )
            }
          </div >}


          <BsFillArrowRightSquareFill
            className="text-[#F1E6B8] text-4xl absolute right-[0] top-1/2 z-1 lg:hidden"
            onClick={() => {
              const t = gsap.timeline();
              if (!chatOpned) {
                t.to("#search-bar", {
                  display: "none",
                });

                t.to(".groupe-list",{
                  display : "none"
                })

                t.to("#chanels", { width: 0 });
                t.to("#groupe-chat", { width: 0 });
                t.to("#input-mess", {
                  display: "flex",
                });
                t.to("#content, .content", {
                  display: "flex",
                });

                setChatOpned(true);
              } else {
                t.to("#content, .content", {
                  display: "none",
                });

                
                t.to("#input-mess", {
                  display: "none",
                });
                t.to("#groupe-chat", { width: "100vw" });
                t.to("#arrow", { right: 0 });
                t.to("#chanels", {
                  width: window.screen.width < 1000 ? "20vw" : "100vw",
                });
                t.to("#search-bar", {
                  display: "block",
                });
                t.to(".groupe-list",{
                  display : "block"
                })
                setChatOpned(false);
              }
            }}
            id="arrow"
          />

          {children}
        </div>
      </main>
    </>
  );
}
