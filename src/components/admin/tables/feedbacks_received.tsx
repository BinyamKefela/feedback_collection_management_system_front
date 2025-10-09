import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Download } from "lucide-react";

function FeedbacksReceivedTable() {
  type tableDataType = {
    no: number;
    branch_location: string;
    tofb: string;
    details: string;
    date: string;
  };

  const tableData = [
    { no: 1, branch_location: "vew", tofb: "cejvew", details: "jkwvew", date: "2025-10-10" },
    { no: 2, branch_location: "vew", tofb: "cejvew", details: "jkwvew", date: "2025-10-10" },
    { no: 3, branch_location: "vew", tofb: "cejvew", details: "jkwvew", date: "2025-10-10" },
    { no: 4, branch_location: "vew", tofb: "cejvew", details: "jkwvew", date: "2025-10-10" },
    { no: 5, branch_location: "vew", tofb: "cejvew", details: "jkwvew", date: "2025-10-10" },
  ];

  return (
    <div className="flex transform items-center justify-center px-3">
      <div className="w-full text-xs max-w-7xl bg-white rounded-lg shadow-sm p-4">
        {/*  Search & Buttons Row */}
        <div className="flex items-end justify-end mb-3">
          <div className="flex flex-row items-end gap-3">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#D4505D]  rounded-md px-2 py-1 text-sm w-52 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />


            {/* Export to CSV Button */}
            <button
              className="flex items-center gap-2 border text-[#D4505D] border-[#D4505D] rounded-md px-3 py-1.5 text-xs font-medium cursor-pointer hover:bg-[#D4505D] hover:text-white transition-colors"
            >
              <Download size={16} />
              Export to CSV
            </button>
          </div>
        </div>

        {/* 🧾 Table */}
        <Table>
          <TableHeader>
            <TableRow className="text-xs h-8">
              <TableHead className="px-2 py-1">No</TableHead>
              <TableHead className="px-2 py-1">Branch location</TableHead>
              <TableHead className="px-2 py-1">Type of feedback</TableHead>
              <TableHead className="px-2 py-1">Details</TableHead>
              <TableHead className="px-2 py-1">Date</TableHead>
              <TableHead className="px-2 py-1">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((_: tableDataType, index) => (
              <TableRow
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} text-xs h-7`}
              >
                <TableCell className="px-2 py-1">{_.no}</TableCell>
                <TableCell className="px-2 py-1">{_.branch_location}</TableCell>
                <TableCell className="px-2 py-1">{_.tofb}</TableCell>
                <TableCell className="px-2 py-1">{_.details}</TableCell>
                <TableCell className="px-2 py-1">{_.date}</TableCell>
                <TableCell className="px-2 py-1">
                  <button className="bg-[#D4505D] cursor-pointer hover:bg-[#d86c77] text-white border px-4 text-xs py-1 rounded-lg">
                    view
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default FeedbacksReceivedTable;


function feedbackModal():any{

  return(<div className=""></div>);
}
