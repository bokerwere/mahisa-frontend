"use client"
import Link from "next/link";
import Image from "next/image";
import {Icon} from "@iconify/react";
import {usePathname} from "next/navigation";

const Sidebar=({ menus= []})=>{

    const path = usePathname()

    return (
        <aside className='bg-white shadow-md w-56 h-screen fixed top-0 p-4 z-0 flex flex-col justify-between'>
            <div>
                <Link href={"/"} className='flex items-center justify-center py-6'>
                    {/* logo */}
                    <Image
                        className={"object-contain"}
                        src='/logo.png'
                        alt='ACK Logo'
                        width={80}
                        height={80}
                    />
                </Link>
                <h1 className='text-[#54617A] text-start text-[12px] pb-4 tracking-wide font-bold'>STAFF</h1>
                {/*Menus*/}
                <div className='flex flex-col gap-4'>
                    {menus.map(navLink=>(
                        <Link key={navLink.id}
                              href={navLink.url}
                              className={`flex justify-between items-center gap-3 hover:text-red/60 ${path&&path.includes(navLink.url)?"text-white bg-primary rounded-md p-2 hover:text-white":"text-[#9197B3]"}`}>
                            <div className="flex items-center space-x-3 p-2">
                                <Icon icon={`${navLink.icon}`} className="text-[20px]" />
                                <span className="text-[13.088px] font-[500]">{navLink.title}</span>
                            </div>
                            <Icon icon="typcn:chevron-right" className="text-[20px]" />
                        </Link>
                    ))}
                </div>
            </div>
            {/*Profile and Log Out*/}
            <div className="border-[.1px] border-primary p-3 rounded-md shadow-md">
                <div className="flex items-center gap-3">
                    <div className="w-14 h-10 rounded-full bg-primary flex items-center justify-center">
                        <Icon icon="mdi:account-circle-outline" className="text-white text-[20px]" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col">
                            <span className="text-[#54617A] text-[12px] font-bold">{`Jane Doe`}</span>
                            <span className="text-[#9197B3] text-[10px]">Staff</span>
                        </div>
                        <button className="border-[.5px] rounded-full">
                            <Icon icon="mdi:chevron-down" className="text-[20px] text-[#9197B3]" />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar