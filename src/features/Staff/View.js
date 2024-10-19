"use client";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { mahisaa } from "../../data/strings";
import CustomTable from "../../utils/CustomTable";

export default function ViewBoardMembers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getBoardMembers();
  }, []);

  const getBoardMembers = async (params = {}, loading = true) => {
    setLoading(loading);

    const res = await axios.get(`${mahisaa}/board-members`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Mahissa")}`, // Include the token in the headers
      },
    });

    if (res) {
      const { data } = res;
      setData(data);
    }
    setLoading(false);
  };

  const columns = useMemo(
    () => [
      { accessorKey: "position", header: "Position" },
      { accessorKey: "boardMemberNo", header: "Board Member No" },
      { accessorKey: "status", header: "Status" },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <button onClick={() => viewBoardMemberDetails(row.original)}>
            View Details
          </button>
        ),
      },
    ],
    []
  );

  function viewBoardMemberDetails(member) {
    router.push(`/admin/boardmembers/details?id=${member.id}`);
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg overflow-y-auto h-[90vh]">
      {/* Headers */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-slate-100">Board Members</h1>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <Icon icon="akar-icons:filter" className="text-[#54617A] text-xl" />
          <p className="text-[#54617A] text-sm">Filter</p>
        </div>
      </div>

      {data.length === 0 ? (
        <div>No results found!</div>
      ) : (
        <CustomTable columns={columns} data={data} />
      )}
    </div>
  );
}
