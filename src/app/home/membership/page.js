import Image from "next/image";
import React from "react";
import ContactUsForm from "@/features/ContactUsForm";
import MembershipForm from "@/features/MembershipForm";
import membership from "@/data/membership";

export default function Membership(){
    return (
        <>
            <div className="relative min-h-[300px] h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 w-full h-full z-0">
                    <Image
                        className={"object-center object-cover"}
                        fill={true}
                        src={"/home/membership/mahisaa-membership.jpg"} alt={"Mahisaa Membership"}
                    />
                </div>
                <div className="w-full absolute top-0 right-0 h-full self-stretch">
                    <div className="w-full h-full flex flex-col justify-center ">
                        <div className="container px-5">
                            <h1 className="md:text-white font-Caladea font-bold text-4xl text-black">
                                Membership
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-10">
                <div className="container px-5">
                    <h1 className="text-primary text-center pb-5 font-Caladea font-bold text-xl">
                        Requirements
                    </h1>

                    <p className={"text-lg md:w-2/3 mx-auto font-medium"}>
                        An aspiring member is required to provide:
                        <ul className="list-disc px-5 text-base font-normal">
                            <li>
                                Provide the dully filled membership application form accompanied by a copy of their national ID (Passport for non-Kenyans), employment letter or pay slip and a passport size photograph.
                            </li>
                            <li>
                                Pay a non-refundable entrance fee of Kshs. 1,000 and a minimum share capital of Kshs. 1,000.
                            </li>
                        </ul>
                    </p>

                    <h1 className="text-primary text-center py-5 font-Caladea font-bold text-xl">
                        Membership is open to
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {membership.map((member,index)=>(
                            <div key={index} className="flex flex-col border-[0.5px] overflow-clip border-primary shadow-[0px_20px_50px_0px_rgba(0,0,0,0.05)] rounded-[12px]">
                               <div className="relative h-[250px] w-full">
                                   {/*<Image fill={true} src={member.image} alt={"Member"} />*/}
                               </div>
                                <p className="text-base font-medium text-center px-3 pb-6">
                                    {member.name}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className="py-10 bg-lightGray">
                <h1 className="pb-10 font-Caladea font-bold text-2xl text-center text-primary">Become a Member</h1>
                <MembershipForm />
            </div>
        </>
    )
}