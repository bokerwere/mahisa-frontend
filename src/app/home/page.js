import Image from "next/image";
import {AvatarIcon, CounterClockwiseClockIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {AiOutlineDollar} from "react-icons/ai";
import {services} from "@/data/services";
import FAQs from "@/features/FAQs";
import ContactUsForm from "@/features/ContactUsForm";

export default function Home(){
    return (
        <>
            <div className="relative min-h-[1200px] md:min-h-[600px] h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 w-full h-full z-0">
                    <Image
                        className={"object-center object-cover"}
                        fill={true}
                        src={"/home/mahisaa-sacco.jpg"} alt={"Home"}
                    />
                </div>
                <div className="w-full absolute top-0 right-0 h-full self-stretch">
                    <div className="w-full h-full flex flex-col justify-end gap-20">
                        <div className="container px-5">
                            <h1 className="text-white font-Caladea font-bold text-4xl flex flex-col gap-1">
                                <span> Welcome to MAHISAA sacco, where empowerment </span>
                                <span> meets tailored financial solutions!</span>
                            </h1>
                        </div>
                        <div className="page-bg py-10">
                            <div className="container text-white px-5 flex flex-col md:flex-row justify-between gap-5">
                                {/*Membership*/}
                                <div className="flex flex-col gap-3 items-start border-[0.5px] border-secondary rounded-md p-3 md:max-w-sm ">
                                    <AvatarIcon width={30} height={30} className={"text-secondary"}/>
                                    <p className="">
                                        Your feedback and financial aspirations shape our services. Join us today and experience the difference. Let us be your partner in achieving financial stability and success.
                                    </p>
                                    <Link href={"/home/membership"} className={"p-2 bg-secondary rounded-md"}>
                                        Became a Member
                                    </Link>
                                </div>
                                {/*Savings*/}
                                <div className="flex flex-col gap-3 items-start border-[0.5px] border-secondary rounded-md p-3 md:max-w-sm ">
                                    <CounterClockwiseClockIcon width={30} height={30} className={"text-secondary"}/>
                                    <p className="">
                                        Whether you're saving for a dream vacation, retirement or any other goal, we are here to support you. Join us and start your journey towards a more financially secure future.
                                    </p>
                                    <Link href={"/home/membership"} className={"p-2 bg-secondary rounded-md"}>
                                        Savings Plan
                                    </Link>
                                </div>
                                {/*Borrow*/}
                                <div className="flex flex-col gap-3 items-start border-[0.5px] border-secondary rounded-md p-3 md:max-w-sm ">
                                    <AiOutlineDollar className={"text-secondary w-[30px] h-[30px]"}/>
                                    <p className="">
                                        We understand that every member has distinct financial requirements. That's why we offer a diverse range of loan products tailored specifically to meet your needs.
                                    </p>
                                    <Link href={"/home/borrow"} className={"p-2 bg-secondary rounded-md"}>
                                        Borrow Now
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-5 py-10 bg-white">
                <p className="text-justify text-lg font-medium">
                    We offer a diverse range of financial services, including competitive savings accounts, affordable loans, responsive customer service, financial education, convenient online banking, community involvement, and exclusive member benefits. Join us today to experience a caring, member-owned cooperative that empowers your financial well-being and supports community growth. Together, let's build a stronger future.
                </p>
            </div>

            <div className="bg-lightGray">
                <div className="container px-5 py-10">
                    <h1 className="pb-10 font-Caladea font-bold text-2xl text-center text-primary">Our Services</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                        {services.map((service,index)=>(
                            <div key={index} className="flex flex-col gap-3 border-[0.5px] border-primary shadow-[0px_20px_50px_0px_rgba(0,0,0,0.05)] rounded-[12px] p-6 hover:scale-110 transition-all ease-in-out">
                                {service.icon}
                                <h3 className=" font-semibold">{service.title}</h3>
                                <p className="text-base">{service.description}</p>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="container px-5 pb-10">
                    {/*<h1 className="pb-10 font-Caladea font-bold text-2xl text-center text-primary">Why Join Us</h1>*/}

                    <ul className="list-disc space-y-3  mx-auto px-5">
                        <li className="text-lg">
                            We offer you an opportunity to accumulate savings through a variety of saving products that are tailored to meet your needs. We also offer you an opportunity to access credit facilities at affordable rates.
                        </li>

                        <li className="text-lg">
                            You can join Mahisaa Sacco by filling in the membership application form and paying a minimum of Kshs. 1,000 as entrance fee and a minimum of Kshs. 1,000 as share capital.
                        </li>

                        <li className="text-lg">
                            Earn high return on investment as members are able to enjoy lucrative annual dividends.
                        </li>

                        <li className="text-lg">
                            Enjoy affordable loans at low interest rates and flexible repayment periods.
                        </li>

                        <li className="text-lg">
                            Enjoy a wide range of products and services that are tailored to meet your needs.
                        </li>
                    </ul>
                </div>
            </div>


            <div className="py-10 bg-white">
                <h1 className="pb-10 font-Caladea font-bold text-2xl text-center text-primary">Contact Us</h1>
                <ContactUsForm />
            </div>

            <div className="bg-lightGray py-10">
                <h1 className="pb-10 font-Caladea font-bold text-2xl text-center text-primary">Frequently Asked Questions</h1>
                <p className="text-lg text-center py-5">
                    Everything you need to know about mahisaa sacco.
                </p>

                <FAQs />
            </div>

        </>
    )
}