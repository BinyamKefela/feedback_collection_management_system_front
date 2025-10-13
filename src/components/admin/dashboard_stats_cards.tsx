import { CloudUploadIcon, MessageCircle, MessageCircleIcon, User2Icon } from "lucide-react";


export default function DashboardStatsRow() {
  return (
    <div className="flex flex-wrap justify-center gap-7 p-6">
      {/* Card 1 */}
      <div className="flex flex-col cursor-pointer hover:bg-[#b0aefd] bg-[#C3C1FF] items-center justify-center shadow-md rounded-lg p-6 w-56">
        <MessageCircle className="text-4xl text-blue-500 mb-2" />
        <p className="text-md font-medium text-gray-800">Total comments</p>
        <p className="text-sm text-black font-medium">1,240 total</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center cursor-pointer hover:bg-[#f8b088] justify-center bg-[#FBC2A3] shadow-md rounded-lg p-6 w-56">
        <CloudUploadIcon className="text-4xl text-green-500 mb-2" />
        <p className="text-md font-semibold text-gray-800">Total complaints</p>
        <p className="text-sm text-black font-medium">$12,340</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#aefdc8] bg-[#C1FFD6] shadow-md rounded-lg p-6 w-56">
        <MessageCircleIcon className="text-4xl text-purple-500 mb-2" />
        <p className="text-md font-semibold text-gray-800">Total comments</p>
        <p className="text-sm font-medium text-black">+15% this month</p>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#c5c3e4] bg-[#D9D8E4] shadow-md rounded-lg p-6 w-56">
        <User2Icon className="text-4xl text-orange-500 mb-2" />
        <p className="text-lg font-semibold text-gray-800">Total feedbacks</p>
        <p className="text-sm font-medium text-black">320 active</p>
      </div>
    </div>
  );
}
