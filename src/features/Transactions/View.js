"use client"
import Link from "next/link";
import {Icon} from "@iconify/react";
import AddTransaction from "@/features/Transactions/Add";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import useAxios from "../../hooks/useAxios";
import {mahisaa} from "../../data/strings"





const View=({ pledge })=>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const router = useRouter()
    const axios = useAxios();

    useEffect(() => {
        getMembers();
      }, []);

    
      const getMembers = async (params = {}, loading = true) => {
        setLoading(loading);
        const { res } = await axios({
          url: `${mahisaa}/api/v1/getAllTransactions`,
          method: "GET",
          headers: null,
        });
    
        if (res) {
          console.log("🚀 ~ getMembers ~ res:", res)
          const { content, meta } = res;
          setData(content);
          if (meta) {
            const paginate = {
              pageNumber: meta.page,
              pageLimit: meta.take,
              pageCount: meta.pageCount,
              totalCount: meta.itemCount,
            };
    
            setPagination(paginate);
          }
        }
        setLoading(false);
      };



    return(
        <div className="flex flex-col bg-white p-5 rounded-lg overflow-y-auto h-[90vh]">
            {/*  Headers*/}
            <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold text-slate-100">
                    {pledge?(
                        `${pledge.entry} Transactions'`
                    ):("Transactions")}
                </h1>
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
                    <AddTransaction />
                    {/*<button className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold">Add Transaction</button>*/}
                </div>
            </div>
            {/*  Table*/}
            <div className="w-full mt-5">
                <table className="w-full">
                    <thead className="w-full">
                    <tr className="text-base">
                            <th className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1">Member First Name</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Member Last Name</th>
                            {!pledge&&<>
                                <th className="text-start border-b-[1px] border-[#EFF3F9]">Pledge Entry</th>
                            </>}
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Amount</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Payment Mode</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Time Registered</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="text-base">
                            <td className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1">Jane</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">Doe</td>
                            {!pledge&&<>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">001003</td>
                            </>}
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">KES 30, 000</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">M-Pesa</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">14th July 2022</td>
                            <td className="text-start border-b-[1px] border-[#EFF3F9]">...</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default View