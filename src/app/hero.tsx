import Image from "next/image";
import logo from "../app/assets/image/logo.png"
import hero from "../app/assets/image/hero.png"
import Link from "next/link";

export default function Hero() {
  return (
    <main className="bg-gradient-to-b from-[#2856A3] h-dvh">
      <div className="h-dvh bg-[#2856A3] lg:h-2/3">
        <header className="absolute top-0 w-full flex items-center justify-between ">
          <Image src={logo} alt="logo" className="h-[13vh] w-[13vh]" />

          <div className="flex flex-col lg:flex-row items-center justify-center">
            <Link href = {"/signUp"}> <button className="bg-[#F1E6B8] w-[25vw] h-[6vh] rounded-md text-2xl lg:w-[10vw] lg:h-[6vh]" >sign up</button></Link>
            <Link href = {"/signIn"}> <button className="bg-[#2856A3] w-[25vw] h-[6vh] rounded-md text-white text-2xl m-2 lg:text-2xl lg:w-[10vw] lg:h-[6vh]">sign in</button></Link>
          </div>
        </header>

        <div className="flex justify-center items-center h-full flex-col-reverse lg:flex-row">
          <div className="flex flex-col w-full text-center items-center h-1/2 justify-center lg:w-2/3">
            <h1 className="text-5xl text-white p-2">
              Join the Best
              Virtual Study
              Groups
            </h1>
            <h2 className="text-white p-5">
              Collaborate, learn, and achieve your academic goals together.
            </h2>
            <Link href = {"/signUp"}>  <button className="bg-[#F1E6B8] w-[35vw] h-[6vh] rounded-md text-xl lg:w-[12vw] lg:h-[6vh]">Get Started</button></Link>
          </div>
          <Image className="w-1/2" src={hero} alt="hero" />
        </div>

        <div className="text-center text-3xl">
          <h1>Features</h1>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-around *:">
            <div className="w-[70vw] h-[25vh] bg-white rounded-lg p-3 flex flex-col justify-around border-solid border-2 border-stone-950 lg:w-1/4 lg:border-white m-3">
              <h1 className="font-black	">Group Chat</h1>
              <p className="font-medium	text-xl">
                Communicate and collaborate in real-time with your study group.
              </p>
            </div>
            <div className="w-[70vw] h-[25vh] bg-white rounded-lg p-3 flex flex-col justify-around border-solid border-2 border-stone-950 lg:w-1/4 lg:border-white m-3">
              <h1 className="font-black	">File Sharing</h1>
              <p className="font-medium	text-xl">
                Share documents, notes, and collaborate on projects effortlessly.
              </p>
            </div>
            <div className="w-[70vw] h-[25vh] bg-white rounded-lg p-3 flex flex-col justify-around border-solid border-2 border-stone-950 lg:w-1/4 lg:border-white m-3">
              <h1 className="font-black	">Event Scheduling</h1>
              <p className="font-medium	text-xl">
                Keep track of study sessions and important dates with ease.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main >
  );
}
