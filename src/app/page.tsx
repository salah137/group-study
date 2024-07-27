"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Hero from "./hero";

export default function Home() {

  const [toShow, setToShow] = useState<any>(false);
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/home")
      setToShow(false);
    } else {
      setToShow(true);
    }
  }, []);

  return (
    <Hero/>
  );
}
