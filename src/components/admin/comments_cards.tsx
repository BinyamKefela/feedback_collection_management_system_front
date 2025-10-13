import { CloudUploadIcon, MessageCircle, MessageCircleIcon, User2Icon } from "lucide-react";
import Image from "next/image";


export default function CommentsCards() {
  return (
    <div className="flex flex-wrap justify-center gap-7 p-6">
      {/* Card 1 */}
      <div className="flex flex-col cursor-pointer hover:bg-[#b0aefd] bg-[#C3C1FF] items-center justify-center shadow-md rounded-lg p-6 w-76">
        <div className="flex flex-wrap gap-x-2">
        <div className="justify-center items-center flex flex-col">
        <p className="text-sm font-medium text-gray-800">In Regions</p>
        <p className="text-lg text-black font-bold">1200+</p>
        </div>
        <Image className="" src='/images/in_regions.svg' alt='in regions' height={40} width={40} />
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col cursor-pointer hover:bg-[#f5b18d] bg-[#FBC2A3] items-center justify-center shadow-md rounded-lg p-6 w-76">
        <div className="flex flex-wrap gap-x-2">
        <div className="justify-center items-center flex flex-col">
        <p className="text-sm font-medium text-gray-800">In Districts</p>
        <p className="text-lg text-black font-bold">1200+</p>
        </div>
        <Image className="" src='/images/in_districts.svg' alt='in regions' height={40} width={40} />
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col cursor-pointer hover:bg-[#a4f2be] bg-[#C1FFD6] items-center justify-center shadow-md rounded-lg py-8 px-6 w-76">
        <div className="flex flex-wrap gap-x-2">
        <div className="justify-center items-center flex flex-col">
        <p className="text-sm font-medium text-gray-800">In Branches</p>
        <p className="text-lg text-black font-bold">1200+</p>
        </div>
        <Image className="" src='/images/in_branches.svg' alt='in regions' height={40} width={40} />
        </div>
      </div>

      
    </div>
  );
}
