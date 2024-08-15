import Image from "next/image";
import React from "react";
import members from "@/data/members";

export default function AboutUs(){
    return (
       <>
           <div className="relative min-h-[300px] h-full flex flex-col">
               <div className="absolute top-0 left-0 right-0 w-full h-full z-0">
                   <Image
                       className={"object-center object-cover"}
                       fill={true}
                       src={"/home/about/mahisaa-team.jpg"} alt={"Home"}
                   />
               </div>
               <div className="w-full absolute top-0 right-0 h-full self-stretch">
                   <div className="w-full h-full flex flex-col justify-center ">
                       <div className="container px-5">
                           <h1 className="text-white font-Caladea font-bold text-4xl">
                               About Us
                           </h1>
                       </div>
                   </div>
               </div>
           </div>

           <div className="bg-white py-10">
               <div className="container px-5">
                   <h1 className="text-primary text-center pb-5 font-Caladea font-bold text-xl">
                        Our Board Members
                   </h1>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                       {members.map((member, i) => (
                           <div key={i} className={"w-full flex justify-center"} >
                               <div className="rounded-md">
                                   <Image
                                       width={300}
                                       height={300}
                                       className="object-cover"
                                       src={member.image}
                                       alt="board member"
                                   />
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           </div>



           <div className="bg-lightGray">
               <div className="container  px-5 py-10">
                   <h1 className="text-primary text-center pb-5 font-Caladea font-bold text-xl">
                       Who We Are
                   </h1>
                   <div className="max-w-[900px] mx-auto">
                       <p className="text-center text-lg font-medium">
                           Maranda High Alumni association Sacco was formed by alumni of the great school.The main purpose was to empower it's members.The members was agreed to mean the current students,former students, teachers and non- teaching staffs.It is guided by the school motto -PUT ON INTEGRITY.
                       </p>
                   </div>
               </div>

               <div className="container  px-5 pb-10">
                   <h1 className="text-primary text-center pb-5 font-Caladea font-bold text-xl">
                       Our Mission
                   </h1>
                   <div className="max-w-[900px] mx-auto">
                       <p className="text-center text-lg font-medium">
                           We transform our member’s lives through provision of affordable innovative and accessible Financial Services.
                       </p>
                   </div>
               </div>

               <div className="container  px-5 pb-10">
                   <h1 className="text-primary text-center pb-5 font-Caladea font-bold text-xl">
                       Our Vision Statement
                   </h1>
                   <div className="max-w-[900px] mx-auto">
                       <p className="text-center text-lg font-medium">
                           To be the financial partner of choice!
                       </p>
                   </div>
               </div>

               <div className="container  px-5 pb-10">
                   <h1 className="text-primary text-center pb-5 font-Caladea font-bold text-xl">
                       Our Core Values
                   </h1>
                   <div className="max-w-[900px] mx-auto">
                       <p className="text-center text-lg font-medium">
                           Service, Diligence, Empowerment
                       </p>
                   </div>
               </div>

               <div className="container  px-5 pb-10">
                   <h1 className="text-primary text-center pb-5 font-Caladea font-bold text-xl">
                       Our Motto
                   </h1>
                   <div className="max-w-[900px] mx-auto">
                       <p className="text-center text-lg font-medium">
                           Your path to prosperity.
                       </p>
                   </div>
               </div>
           </div>
       </>
    )
}