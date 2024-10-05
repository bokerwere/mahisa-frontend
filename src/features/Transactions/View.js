"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import AddTransaction from "@/features/Transactions/Add";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import { mahisaa } from "../../data/strings";
import CustomTable from "../../utils/CustomTable"; // Assuming CustomTable is reusable
import axios from "axios";
const View = ({ pledge }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async (params = {}, loading = true) => {
    setLoading(loading);
    const res = await axios({
      url: `${mahisaa}/payments/getAll`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Mahissa")}`, // Include the token in the headers
      },
    });

    if (res) {
      const { data } = res;
      setData(data.content);
    }
    setLoading(false);
  };

  const columns = useMemo(
    () => [
      { accessorKey: "paymentCode", header: "Payment Code" },
      { accessorKey: "amount", header: "Amount" },
      { accessorKey: "paymentMode", header: "Payment Mode" },
      { accessorKey: "remarks", header: "Remarks" },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <button
            className="text-blue-500 underline"
            onClick={() => viewTransactionDetails(row.original)}
          >
            View Details
          </button>
        ),
      },
    ],
    []
  );

  function viewTransactionDetails(transaction) {
    router.push(`/transactions/details?id=${transaction.id}`);
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg overflow-y-auto h-[90vh]">
      {/* Headers */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-slate-100">
          {pledge ? `${pledge.entry} Transactions` : "Transactions"}
        </h1>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <Icon icon="akar-icons:filter" className="text-[#54617A] text-xl" />
          <p className="text-[#54617A] text-sm">Filter</p>
        </div>
        <div className="flex gap-2">
          <AddTransaction />
        </div>
      </div>

      {data.length === 0 ? (
        <div>No results found</div>
      ) : (
        <CustomTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default View;
