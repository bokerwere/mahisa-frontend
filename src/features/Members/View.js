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
  const [showModal, setShowModal] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [position, setPosition] = useState("");
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

  const handleCreateBoardMember = async () => {
    if (!selectedMemberId || !position) {
      alert("Please select a member and a position.");
      return;
    }

    try {
      const res = await axios.post(
        `${mahisaa}/create/board-members`,
        {
          memberId: selectedMemberId,
          position,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Mahissa")}`,
          },
        }
      );
      console.log(res.data, "res");

      alert("Board member created successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Error creating board member:", error);
      alert("Failed to create board member.");
    }
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
          <div className="flex gap-2">
            <button
              onClick={() => viewPledges(row.original)}
              className="text-blue-500 underline"
            >
              View Pledges
            </button>
            <button
              onClick={() => {
                setSelectedMemberId(row.original.memberId);
                setShowModal(true);
              }}
              className="text-green-500 underline"
            >
              Create Board Member
            </button>
          </div>
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
      {showModal && (
        <div className="fixed inset-0  bg-blue-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Create Board Member</h2>
            <div className="mb-4">
              <label className="block mb-2">Position</label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Enter position (e.g., Chairman)"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateBoardMember}
                className="bg-blue-600 text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMembers;
