import { Bell, LayoutDashboard, MessageSquareIcon, BellIcon, Settings } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Top Navbar */}
      <header className="flex justify-between items-center shadow-md bg-white h-16 w-full px-4">
        <div className="relative w-32 h-10">
          <Image alt="logo" src="/images/feedback_logo.svg" fill className="object-contain" />
        </div>

        <input
          className="border-b border-black outline-none w-[30%]"
          type="text"
          placeholder="Search..."
        />

        <div className="flex items-center gap-4">
          <Bell />
          <div className="w-7 h-7 rounded-full bg-blue-400"></div>
        </div>
      </header>

      {/* Main layout */}
      <main className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden sm:flex flex-col w-56 bg-white rounded-xl shadow-md p-3 m-2">
          <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
            <LayoutDashboard className="text-[#D02149]" size={17} />
            <p className="text-sm font-semibold text-[#D02149]">Dashboard</p>
          </div>
          <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
            <MessageSquareIcon size={17} />
            <p className="text-sm font-semibold">Feedbacks</p>
          </div>
          <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
            <BellIcon size={17} />
            <p className="text-sm font-semibold">Notifications</p>
          </div>
          <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
            <Settings size={17} />
            <p className="text-sm font-semibold">Settings</p>
          </div>
        </aside>

        {/* Page Content */}
        <section className="flex-1 m-2 overflow-y-auto">{children}</section>
      </main>
    </div>
  );
}
