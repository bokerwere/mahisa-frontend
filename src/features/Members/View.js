"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { mahisaa } from "../../data/strings";
import CustomTable from "../../utils/CustomTable";
import axios from "axios";

const ViewMembers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async (loading = true) => {
    console.log(localStorage.getItem("Mahissa"), "token");

    setLoading(loading);
    const res = await axios.get(`${mahisaa}/members/findAll?page=0&size=20`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Mahissa")}`, // Include the token in the headers
      },
    });

    if (res) {
      const { content } = res.data;
      setData(content);
    }
    setLoading(false);
  };

  const columns = useMemo(
    () => [
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      { accessorKey: "nationalId", header: "ID Number" },
      { accessorKey: "phoneNumber", header: "Phone" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "status", header: "Status" },
      { accessorKey: "memberNo", header: "Member No" },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <button onClick={() => viewPledges(row.original)}>
            View Pledges
          </button>
        ),
      },
    ],
    []
  );

  function viewPledges(member) {
    router.push(`/admin/members/pledges?id=${member.id}`);
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg overflow-y-auto h-[90vh]">
      {/*  Headers*/}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-slate-100">Members</h1>
        {/*  Filter*/}
        <div className="flex items-center gap-2">
          <Icon icon="akar-icons:filter" className="text-[#54617A] text-lg" />
          <p className="text-[#54617A] text-sm">Filter</p>
        </div>
        <div className="flex gap-2">
          <Link
            href={"members/register"}
            className="bg-primary text-[#eee] py-2 px-4 rounded-lg text-sm font-bold"
          >
            Register Member
          </Link>
        </div>
      </div>
      {data.length === 0 ? (
        <div> No results found!</div>
      ) : (
        <CustomTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default ViewMembers;
