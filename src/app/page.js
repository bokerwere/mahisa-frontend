"use client"
import Image from 'next/image'
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Home() {

    const router = useRouter()

    useEffect(() => {
        setTimeout(()=>{
            router.push("/home")
        }, 1000)
    }, []);
  return (
    <main className="flex min-h-screen h-full w-full flex-col items-center justify-center relative p-24">
        <Image
          className="contain"
          src="/icon.png"
          alt="Next.js Logo"
          width={200}
          height={250}
          priority
        />
    </main>
  )
}
