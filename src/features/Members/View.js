"use client"
import {Icon} from "@iconify/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import useAxios from "../../hooks/useAxios";
import {mahisaa} from "../../data/strings"


const ViewMembers = ()=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const router = useRouter()
    const axios = useAxios();

    useEffect(() => {
        getMembers();
      }, []);

    
      const getMembers = async ( loading = true) => {
        setLoading(loading);
        const { res } = await axios({
          url: `${mahisaa}/api/v1/members`,
          method: "GET",
          headers: null
        });
    
        if (res) {
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

    function viewPledges(){
        router.push("/admin/members/pledges")
    }
    return (
        <div className="flex flex-col bg-white p-5 rounded-lg overflow-y-auto h-[90vh]">
            {/*  Headers*/}
            <div className="flex justify-between items-center w-full">
                <h1 className="text-xl font-bold text-slate-100">Members</h1>
                {/*  Search*/}
                <div className="flex items-center gap-2">
                    <Icon icon="akar-icons:search" className="text-[#54617A] text-lg"/>
                    <input type="text" placeholder="Search" className="text-[#54617A] text-sm"/>
                </div>
                {/*  Filter*/}
                <div className="flex items-center gap-2">
                    <Icon icon="akar-icons:filter" className="text-[#54617A] text-lg"/>
                    <p className="text-[#54617A] text-sm">Filter</p>
                </div>
                <div className="flex gap-2">
                    <Link href={"members/register"} className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold">Register Member</Link>
                </div>
            </div>

            {/*  Table*/}
            <div className="w-full mt-5">
                <table className="w-full">
                    <thead className="w-full">
                        <tr className="text-base">
                            <th className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1">First Name</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Last Name</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">ID Number</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Phone</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Email</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Status</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Time Registered</th>
                            <th className="text-start border-b-[1px] border-[#EFF3F9]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data&&data.map((item,index)=>(
                        <tr onClick={viewPledges} className="text-base cursor-pointer">
                                <td className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1">Jane</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">Doe</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">123456</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">0712345678</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">jane@doe.com</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">Active</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">14th July 2022</td>
                                <td className="text-start border-b-[1px] border-[#EFF3F9]">...</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewMembers