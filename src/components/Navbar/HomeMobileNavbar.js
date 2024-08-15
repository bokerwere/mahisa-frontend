"use client"
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {Cross1Icon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import homeMenus from "@/data/home-menus";

export default function HomeMobileNavbar({ setOpen }){
    const pathname= usePathname()
    return(
        <div className="bg-white relative w-full h-[100%] flex flex-col items-center">
            <div className="flex w-full items-center p-5 justify-between bg-white">
                <Link onClick={() => setOpen(false)} href="/home">
                    <Image
                        src={"/logo.png"}
                        className="object-contain"
                        height={80}
                        width={80}
                        alt={"Mahisaa Logo"}
                    />
                </Link>
                <button className="border-none outline-none" onClick={() => setOpen(false)}>
                    <Cross1Icon  height={30} width={30} className={'text-primary '} />
                </button>
            </div>

            <div className="flex flex-col gap-6 px-5 py-8 text-center">
                {homeMenus.map((item, index) => {
                    return (
                        <Link
                            className={`text-xl font-Caladea font-bold hover:text-secondary ${pathname===item.url?"text-secondary":"text-primary"}`}
                            key={index}
                            onClick={() => setOpen(false)}
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    );
                })}
                <Link className={"py-1 px-4 rounded-md bg-primary text-white "} href={"/auth/signin"}>
                    Sign In
                </Link>
            </div>
        </div>
    )
}