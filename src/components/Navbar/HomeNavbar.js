"use client"
import Image from "next/image";
import homeMenus from "@/data/home-menus";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Cross1Icon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import HomeMobielNavbar from "@/components/Navbar/HomeMobileNavbar";
import {useState} from "react";

export default function HomeNavbar(){
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    return(
        <nav className="bg-transparent w-full ">
            <div className="container px-5 flex justify-between items-center">
                {/*Logo*/}
                <div className="relative">
                    <Image src={"/logo.png"} alt={"Mahisaa Logo"} width={80} height={80} className={"object-contain"} />
                </div>

                {/*Navigation*/}
                <div className="">
                    {/*Desktop*/}
                    <div className="hidden md:flex space-x-6">
                        {homeMenus.map((menu, index)=>(
                            <Link href={menu.url} className={`text-xl font-Caladea font-bold hover:text-secondary ${pathname===menu.url?"text-secondary":"text-primary"}`}>{menu.name}</Link>
                        ))}
                        <Link className={"py-1 px-4 rounded-md bg-primary text-white "} href={"/auth/signin"}>
                            Sign In
                        </Link>
                    </div>
                    {/*Mobile*/}
                    <button onClick={() => setOpen(!open)} className="md:hidden flex border-none outline-none">
                        <HamburgerMenuIcon height={30} width={30}  className={`text-primary`} />
                    </button>
                    {open && (
                        <div className="absolute z-50 top-0 right-0 w-full">
                            <HomeMobielNavbar setOpen={setOpen} />
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}