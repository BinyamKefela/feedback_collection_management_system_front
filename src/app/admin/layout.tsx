import { Bell, BellElectricIcon, BellIcon, LayoutDashboard, MessageSquareIcon, Settings } from "lucide-react";
import Image from "next/image";

 export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="flex flex-wrap justify-between items-center shadow-md bg-white h-15 w-full">
          <div className="relative w-30 h-15">
            <Image alt="logo" src="/images/feedback_logo.svg" fill />
          </div>
          <input
          className="border-b-black border-0 border-b-1 w-[30%]"
            type="text"
            placeholder="Search..."/>
            <div className="flex flex-wrap items-center gap-4 mr-4">
              <Bell/>
              <div className="w-7 h-7 rounded-full bg-blue-400"></div>
            </div>

           
        </div>
        <div className="grid grid-cols-7 mt-2 min-h-screen ml-2 rounded-lg ">
        <div className="col-span-1  rounded-xl shadow-md bg-white">
          <div className="flex flex-col">
        <div className="flex py-3 cursor-pointer flex-wrap items-center px-3 gap-2 hover:bg-gray-100">
          <LayoutDashboard className="text-[#D02149]" size={17}/><p className="text-sm text-[#D02149]">Dashboard</p>
        </div>
        <div className="flex py-3 cursor-pointer flex-wrap items-center px-3 gap-2 hover:bg-gray-100">
          <MessageSquareIcon size={17}/><p className="text-sm">Feedbacks</p>
        </div>
        <div className="flex py-3 cursor-pointer flex-wrap items-center px-3 gap-2 hover:bg-gray-100">
          <BellIcon size={17}/><p className="text-sm">Notifications</p>
        </div>
        <div className="flex py-3 cursor-pointer flex-wrap items-center px-3 gap-2 hover:bg-gray-100">
          <Settings size={17}/><p className="text-sm">Settings</p>
        </div>
        </div>
        </div>
        <div className="col-span-6 ml-5">{children}</div>
        </div>
      </div>
      </div>
  )
}