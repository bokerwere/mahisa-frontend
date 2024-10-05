"use client";
import { Icon } from "@iconify/react";
import AddLoan from "@/features/Loans/Add"; // Assuming you have a component to add loans
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { mahisaa } from "../../data/strings";
import CustomTable from "../../utils/CustomTable"; // Reusable CustomTable component
import axios from "axios";
const ViewLoans = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getLoans();
  }, []);

  const getLoans = async () => {
    setLoading(true);

    const res = await axios.get(`${mahisaa}/loans/findAll`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Mahissa")}`, // Include the token in the headers
      },
    });

    if (res) {
      console.log(res, "res");
      const { data } = res;
      setData(data.content);
    }
    setLoading(false);
  };

  const columns = useMemo(
    () => [
      { accessorKey: "loanApplicationCode", header: "Loan Application Code" },
      { accessorKey: "loanAmount", header: "Loan Amount" },
      { accessorKey: "monthlyRepayment", header: "Monthly Repayment" },
      { accessorKey: "loanStatus", header: "Status" },
      { accessorKey: "dateApplied", header: "Date Applied" },
      { accessorKey: "approvedDate", header: "Approved Date" },
      { accessorKey: "loanPurpose", header: "Purpose" },
      { accessorKey: "remarks", header: "Remarks" },
      {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
          <button
            className="text-blue-500 underline"
            onClick={() => viewLoanDetails(row.original)}
          >
            View Details
          </button>
        ),
      },
    ],
    []
  );

  function viewLoanDetails(loan) {
    router.push(`/loans/details?id=${loan.loanApplicationId}`);
  }

  return (
    <div className="flex flex-col bg-white p-5 rounded-lg overflow-y-auto h-[90vh]">
      {/* Headers */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-slate-100">Loans</h1>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <Icon icon="akar-icons:filter" className="text-[#54617A] text-xl" />
          <p className="text-[#54617A] text-sm">Filter</p>
        </div>

        <div className="flex gap-2">
          <AddLoan />
        </div>
      </div>

      {/* Custom Table */}
      {data.length === 0 ? (
        <div>No loans found</div>
      ) : (
        <CustomTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default ViewLoans;
