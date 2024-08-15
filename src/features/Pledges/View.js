"use client"
import Link from "next/link";
import {Icon} from "@iconify/react";
import {useRouter} from "next/navigation";
import AddPledge from "@/features/Pledges/Add";

const View=({ member })=>{

    const router = useRouter()

    function viewTransactions(){
        router.push("/admin/pledges/transactions")
    }
    return(
        <div className="flex flex-col bg-white p-5 rounded-lg overflow-y-auto h-[90vh]">
            {/*  Headers*/}
            <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold text-slate-100">{member? member : "Pledges"}</h1>
                {/*  Search*/}
                <div className="flex items-center gap-2">
                    <Icon icon="akar-icons:search" className="text-[#54617A] text-xl"/>
                    <input type="text" placeholder="Search" className="text-[#54617A] text-sm"/>
                </div>
                {/*  Filter*/}
                <div className="flex items-center gap-2">
                    <Icon icon="akar-icons:filter" className="text-[#54617A] text-xl"/>
                    <p className="text-[#54617A] text-sm">Filter</p>
                </div>
                <div className="flex gap-2">
                    {member&& <AddPledge />
                    }
                    {/*<button className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold">Add Pledge</button>*/}
                </div>
            </div>
            {/*  Table*/}
            <div className="w-full mt-5">
                <table className="w-full">
                    <thead className="w-full">
                    <tr className="text-base">
                            {!member&&<>
                                <th className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1">Member First Name</th>
                                <th className="text-start border-b-[1px] border-[#EFF3F9]">Member Last Name</th>
                                <th className="text-start border-b-[1px] border-[#EFF3F9]">Member ID Number</th>
                            </>}
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Pledge Entry</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Pledge Type</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Amount</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Status</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Time Registered</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={viewTransactions} className="text-base cursor-pointer py-1">
                            {!member&&<>
                                <td className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1">Jane</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">Doe</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">123456</td>
                            </>}
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">001003</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">Normal</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">KES 30, 000</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">Paid</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">14th July 2022</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default View