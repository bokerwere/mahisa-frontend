import Image from "next/image";
import Link from "next/link";
import homeMenus from "@/data/home-menus";

export default function HomeFooter(){
    return(
        <footer className="bg-white py-10">
            <div className="container px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {/*Address*/}
                <div className="flex flex-col text-xl font-Caladea  font-medium ">
                    <p className="">Mahisaa Sacco</p>
                    <p className="">P.O BOX 1212-00100</p>
                    <p className="">Waiyaki Way,</p>
                    <p className="">Nairobi</p>
                    <Link href={"mailto:support@mahisaa.co.ke"} className="">support@mahisaa.co.ke</Link>
                    <Link href={"phone:+25470000000"} className="">254 710 000 000</Link>
                </div>

                {/*Links*/}
                <div className="flex flex-col justify-end">
                    {homeMenus.map((menu, index)=>(
                        <Link href={menu.url} className={`text-xl font-Caladea font-medium hover:text-secondary`}>{menu.name}</Link>
                    ))}
                </div>

                {/*AOB Links*/}
                <div className="flex flex-col justify-end">
                    <Link href={"/privacy-policy"} className={`text-xl font-Caladea font-medium hover:text-secondary`}>
                        Privacy Policy
                    </Link>

                    <Link href={"/privacy-policy"} className={`text-xl font-Caladea font-medium hover:text-secondary`}>
                        Terms & Conditions
                    </Link>

                </div>

                {/*Logo*/}
                <div className="relative flex justify-start md:justify-end items-end">
                    <Image src={"/logo.png"} alt={"Mahisaa Logo"} width={160} height={80} className={"object-contain"} />
                </div>
            </div>
        </footer>
    )
}