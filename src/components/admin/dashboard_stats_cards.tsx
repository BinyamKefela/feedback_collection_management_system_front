import { CloudUploadIcon, MessageCircle, MessageCircleIcon, User2Icon } from "lucide-react";
import Image from "next/image";


export default function DashboardStatsRow() {
  return (
    <div className="flex flex-wrap justify-center gap-7 p-6">
      {/* Card 1 */}
      <div className="flex flex-row justify-between w-full sm:w-56 p-6 cursor-pointer hover:bg-[#7cf7b6] bg-[#8EFDC2] items-center  shadow-md rounded-lg">
      <div className="flex flex-col gap-y-2">
        <p className="text-sm font-medium text-gray-800">Total feedback</p>
        <p className="text-lg text-black font-bold">7200 </p>
      </div>
      <Image alt="total feedbacks" height={50} width={50} src={"/images/fluent_person.svg"}/>
      </div>

      {/* Card 2 */}
      <div className="flex flex-row justify-between w-full sm:w-56 p-6 cursor-pointer hover:bg-[#fcb96b] bg-[#FEC788] items-center  shadow-md rounded-lg">
      <div className="flex flex-col gap-y-2">
        <p className="text-sm font-medium text-gray-800">Complaints</p>
        <p className="text-lg text-black font-bold">1200 </p>
      </div>
      <Image alt="total feedbacks" height={50} width={50} src={"/images/complaints_icon.svg"}/>
      </div>

      {/* Card 3 */}
      <div className="flex flex-row justify-between w-full sm:w-56 p-6 cursor-pointer hover:bg-[#7ea6f8] bg-[#95B6F8] items-center  shadow-md rounded-lg">
      <div className="flex flex-col gap-y-2">
        <p className="text-sm font-medium text-gray-800">Comments</p>
        <p className="text-lg text-black font-bold">5000 </p>
      </div>
      <Image alt="total feedbacks" height={50} width={50} src={"/images/comments_icon.svg"}/>
      </div>

      {/* Card 4 */}
      <div className="flex flex-row justify-between w-full sm:w-56 p-6 cursor-pointer hover:bg-[#f663b9] bg-[#FF85CC] items-center  shadow-md rounded-lg">
      <div className="flex flex-col gap-y-2">
        <p className="text-sm font-medium text-gray-800">Reccomendations</p>
        <p className="text-lg text-black font-bold">1000 </p>
      </div>
      <Image alt="total feedbacks" height={50} width={50} src={"/images/recomendations_icon.svg"}/>
      </div>
    </div>
  );
}
