// import React, { useMemo, useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getPaginationRowModel,
//   flexRender,
// } from "@tanstack/react-table";
// import { Icon } from "@iconify/react";

// const CustomTable = ({ columns, data }) => {
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [pageSize, setPageSize] = useState(10); // Default rows per page

//   const filteredData = useMemo(() => {
//     if (!globalFilter) return data;
//     return data.filter((row) =>
//       columns.some((column) =>
//         String(row[column.accessorKey])
//           .toLowerCase()
//           .includes(globalFilter.toLowerCase())
//       )
//     );
//   }, [globalFilter, data, columns]);

//   const table = useReactTable({
//     columns,
//     data: filteredData,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     pageCount: Math.ceil(filteredData.length / pageSize),
//     manualPagination: false,
//     state: {
//       globalFilter,
//     },
//   });

//   return (
//     <div className="flex flex-col w-full">
//       {/* Search input */}

//       <div className="flex items-center gap-2">
//         <Icon icon="akar-icons:search" className="text-[#54617A] text-xl" />
//         <input
//           type="text"
//           value={globalFilter}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search"
//           className="text-[#54617A] text-sm"
//         />
//       </div>

//       {/* Table */}
//       <table className="w-full mt-5">
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th
//                   key={header.id}
//                   className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1"
//                 >
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id} className="text-base cursor-pointer">
//               {row.getVisibleCells().map((cell) => (
//                 <td
//                   key={cell.id}
//                   className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1"
//                 >
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center gap-2">
//           <button
//             className="px-4 py-2 border rounded"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </button>
//           <span>
//             Page{" "}
//             <strong>
//               {table.getState().pagination.pageIndex + 1} of{" "}
//               {table.getPageCount()}
//             </strong>
//           </span>
//           <button
//             className="px-4 py-2 border rounded"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </button>
//         </div>

//         {/* Rows per page */}
//         <div className="flex items-center gap-2">
//           <span>Rows per page:</span>
//           <select
//             value={pageSize}
//             onChange={(e) => {
//               setPageSize(Number(e.target.value));
//               table.setPageSize(Number(e.target.value));
//             }}
//             className="border p-2 rounded"
//           >
//             {[10, 20, 30, 40, 50].map((pageSize) => (
//               <option key={pageSize} value={pageSize}>
//                 {pageSize}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomTable;

// import React, { useMemo, useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getPaginationRowModel,
//   getFilteredRowModel,
//   flexRender,
// } from "@tanstack/react-table";
// import { Icon } from "@iconify/react";

// const CustomTable = ({ columns, data }) => {
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [columnFilters, setColumnFilters] = useState({});
//   const [pageSize, setPageSize] = useState(10); // Default rows per page

//   // Apply column-specific filters
//   const filteredData = useMemo(() => {
//     return data.filter((row) => {
//       return Object.entries(columnFilters).every(([accessor, filterValue]) =>
//         String(row[accessor]).toLowerCase().includes(filterValue.toLowerCase())
//       );
//     });
//   }, [columnFilters, data]);

//   const table = useReactTable({
//     columns,
//     data: filteredData,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     pageCount: Math.ceil(filteredData.length / pageSize),
//     manualPagination: false,
//     state: {
//       globalFilter,
//     },
//   });

//   const handleFilterChange = (accessor, value) => {
//     setColumnFilters((prevFilters) => ({
//       ...prevFilters,
//       [accessor]: value,
//     }));
//   };

//   return (
//     <div className="flex flex-col w-full">
//       {/* Global Search input */}

//       <div className="flex items-center gap-2">
//         {" "}
//         <Icon icon="akar-icons:search" className="text-[#54617A] text-xl" />
//         <input
//           type="text"
//           value={globalFilter}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search"
//           className="text-[#54617A] text-sm"
//         />
//       </div>

//       {/* Table */}
//       <table className="w-full mt-5">
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th
//                   key={header.id}
//                   className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1"
//                 >
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}

//                   {/* Column-based Filter Input */}
//                   {header.column.getCanFilter() && (
//                     <input
//                       type="text"
//                       className="mt-2 border rounded p-1 w-full"
//                       placeholder={`Filter ${header.column.id}`}
//                       value={columnFilters[header.column.id] || ""}
//                       onChange={(e) =>
//                         handleFilterChange(header.column.id, e.target.value)
//                       }
//                     />
//                   )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id} className="text-base cursor-pointer">
//               {row.getVisibleCells().map((cell) => (
//                 <td
//                   key={cell.id}
//                   className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1"
//                 >
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center mt-4">
//         <div className="flex items-center gap-2">
//           <button
//             className="px-4 py-2 border rounded"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </button>
//           <span>
//             Page{" "}
//             <strong>
//               {table.getState().pagination.pageIndex + 1} of{" "}
//               {table.getPageCount()}
//             </strong>
//           </span>
//           <button
//             className="px-4 py-2 border rounded"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </button>
//         </div>

//         {/* Rows per page */}
//         <div className="flex items-center gap-2">
//           <span>Rows per page:</span>
//           <select
//             value={pageSize}
//             onChange={(e) => {
//               setPageSize(Number(e.target.value));
//               table.setPageSize(Number(e.target.value));
//             }}
//             className="border p-2 rounded"
//           >
//             {[10, 20, 30, 40, 50].map((pageSize) => (
//               <option key={pageSize} value={pageSize}>
//                 {pageSize}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomTable;

import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Icon } from "@iconify/react";

const CustomTable = ({ columns, data }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(10); // Default rows per page

  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter((row) =>
      columns.some((column) =>
        String(row[column.accessorKey])
          .toLowerCase()
          .includes(globalFilter.toLowerCase())
      )
    );
  }, [globalFilter, data, columns]);

  const table = useReactTable({
    columns,
    data: filteredData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), // Enable sorting
    pageCount: Math.ceil(filteredData.length / pageSize),
    manualPagination: false,
    state: {
      globalFilter,
    },
  });

  const handleSort = (columnId) => {
    table.setSorting((prev) => {
      const isDesc = prev[0]?.id === columnId && !prev[0]?.desc;
      return [{ id: columnId, desc: isDesc }];
    });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-2">
        <Icon icon="akar-icons:search" className="text-[#54617A] text-xl" />
        <input
          type="text"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search"
          className="text-[#54617A] text-sm"
        />
      </div>

      <table className="w-full mt-5">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1"
                >
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => handleSort(header.id)} // Sorting on header click
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === "desc" ? (
                        <Icon icon="akar-icons:arrow-down" className="ml-1" />
                      ) : (
                        <Icon icon="akar-icons:arrow-up" className="ml-1" />
                      )
                    ) : (
                      <Icon icon="akar-icons:arrow-up-down" className="ml-1" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="text-base cursor-pointer">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-start border-b-[1px] border-[#EFF3F9] h-[47px] px-1"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center px-4 py-2 border"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Icon icon="akar-icons:chevron-left" className="mr-1" />
            Previous
          </button>
          <span>
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <button
            className="flex items-center px-4 py-2 border "
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
            <Icon icon="akar-icons:chevron-right" className="ml-1" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              table.setPageSize(Number(e.target.value));
            }}
            className="border p-2 rounded"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
