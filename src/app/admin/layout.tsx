"use client";

import { useState } from "react";
import {
  Bell,
  LayoutDashboard,
  MessageSquareIcon,
  BellIcon,
  Settings,
  Search,
  Menu,
  MapPin,
  GitBranch,
  ChevronDown,
  MessageCircleReplyIcon,
  MessageCircleIcon,
  CloudAlertIcon,
  CloudUpload,
  ThumbsUpIcon,
  Siren,
  Megaphone,
  QrCode,
  LineChart,
  User,
  GitBranchIcon,
  GitBranchPlusIcon,
  MegaphoneIcon,
  LogOutIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Top Navbar */}
      <header className="flex justify-between fixed items-center shadow-md bg-white h-16 w-full px-4  z-30">
        <div className="flex items-center gap-3">
          {/* Mobile menu icon */}
          <button
            className="sm:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <div className="relative w-32 h-10">
            <Image
              alt="logo"
              src="/images/feedback_logo.svg"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Search bar */}
        <div className="relative w-[40%] max-w-sm hidden sm:block">
          <Search
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            className="border-b border-black outline-none w-full pl-8 py-1 placeholder:text-gray-500"
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* Right side (notifications + user) */}
        <div className="flex items-center gap-4 relative">
          {/* Notification dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <Bell />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md py-2 animate-slideDown z-40">
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  <MapPin size={16} className="text-[#D02149]" />
                  <span className="text-sm font-medium">Districts</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  <GitBranch size={16} className="text-[#D02149]" />
                  <span className="text-sm font-medium">Branches</span>
                </div>
              </div>
            )}
          </div>

          {/* User avatar */}
          <div className="w-7 h-7 rounded-full bg-blue-400"></div>
        </div>
      </header>

      {/* Main layout */}
      <main className="flex flex-1 overflow-hidden relative mt-17 ">
        {/* Sidebar for desktop (fixed & scrollable) */}
        <aside className="hidden sm:flex flex-col fixed  top-16 left-0 h-[calc(100vh-4rem)] w-56 bg-white rounded-xl shadow-md p-3 overflow-y-auto z-20">
          <SidebarContent />
        </aside>

        {/* Sidebar for mobile (slide-in animation) */}
        <aside
          className={`sm:hidden fixed top-0 left-0 h-full w-56 bg-white shadow-lg p-3 z-50 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Menu</h3>
            <button onClick={() => setSidebarOpen(false)}>✕</button>
          </div>
          <SidebarContent />
        </aside>

        {/* Overlay when mobile sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 sm:hidden animate-fadeIn"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Page Content */}
        <section className="flex-1 py-2 overflow-y-auto sm:ml-56">
          {children}
        </section>
      </main>

      {/* Animations */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

/* --- Sidebar Content --- */
function SidebarContent() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex flex-col text-xs">
      {/* Dashboard */}
      <Link href={"/admin/dashboard"}>
        <div
          className={`flex items-center py-2 gap-2 cursor-pointer rounded-md px-2 
    ${
      pathname === "/admin/dashboard"
        ? "hover:bg-gray-100"
        : "hover:bg-gray-100"
    }`}
        >
          <LayoutDashboard
            size={17}
            className={
              pathname === "/admin/dashboard"
                ? "text-[#D02149]"
                : "text-gray-500"
            }
          />
          <p
            className={`text-xs font-semibold ${
              pathname === "/admin/dashboard"
                ? "text-[#A7710D]"
                : "text-gray-700"
            }`}
          >
            Dashboard
          </p>
        </div>
      </Link>

      <Link href={"/admin/dashboard/user"}>
        <div
          className={`flex items-center py-2 gap-2 cursor-pointer rounded-md px-2 
    ${
      pathname === "/admin/dashboard/user"
        ? "hover:bg-gray-100"
        : "hover:bg-gray-100"
    }`}
        >
          <User
            size={17}
            className={
              pathname === "/admin/dashboard/user"
                ? "text-[#D02149]"
                : "text-gray-500"
            }
          />
          <p
            className={`text-xs font-semibold ${
              pathname === "/admin/dashboard/user"
                ? "text-[#A7710D]"
                : "text-gray-700"
            }`}
          >
            User management
          </p>
        </div>
      </Link>
      <Link href={"/admin/dashboard/branch"}>
        <div
          className={`flex items-center py-2 gap-2 cursor-pointer rounded-md px-2 
    ${
      pathname === "/admin/dashboard/branch"
        ? "hover:bg-gray-100"
        : "hover:bg-gray-100"
    }`}
        >
          <GitBranchIcon
            size={17}
            className={
              pathname === "/admin/branch" ? "text-[#D02149]" : "text-gray-500"
            }
          />
          <p
            className={`text-xs font-semibold ${
              pathname === "/admin/dashboard/branch"
                ? "text-[#A7710D]"
                : "text-gray-700"
            }`}
          >
            branch management
          </p>
        </div>
      </Link>

      {/* Feedbacks dropdown */}
      <div>
        <div
          className="flex items-center justify-between py-3 cursor-pointer hover:bg-gray-100 rounded-md px-2"
          onClick={() => setFeedbackOpen(!feedbackOpen)}
        >
          <div className="flex items-center gap-2">
            <MessageSquareIcon size={17} />
            <p className="text-xs font-semibold">Feedback Management</p>
          </div>
          <ChevronDown
            size={16}
            className={`transform transition-transform duration-200 ${
              feedbackOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {feedbackOpen && (
          <div className="ml-6 mt-1 animate-slideDown">
            <Link href={"/admin/comments"}>
              <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
                <MessageCircleIcon size={15} className="text-xs" />
                <p className="text-sm">comments</p>
              </div>
            </Link>
            <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
              <CloudUpload size={15} className="text-xs" />
              <p className="text-sm">complaints</p>
            </div>
            <div className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
              <ThumbsUpIcon size={15} className="text-xs" />
              <p className="text-sm">recommendation</p>
            </div>
          </div>
        )}
      </div>

      
      <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
        <Link href={"/admin/dashboard/feedback_analysis"}>
          <div
            className={`flex items-center py-2 gap-2 cursor-pointer rounded-md px-2 
    ${
      pathname === "/admin/dashboard/feedback_analysis"
        ? "hover:bg-gray-100"
        : "hover:bg-gray-100"
    }`}
          >
            <BellIcon
              size={17}
              className={
                pathname === "/admin/dashboard/feedback_analysis"
                  ? "text-[#D02149]"
                  : "text-gray-500"
              }
            />
            <p
              className={`text-xs font-semibold ${
                pathname === "/admin/dashboard/feedback_analysis"
                  ? "text-[#A7710D]"
                  : "text-gray-700"
              }`}
            >
              Feedback analysis
            </p>
          </div>
        </Link>
      </div>

      {/* Settings */}
      <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
        <Link href={"/admin/dashboard/report_and_insight"}>
          <div
            className={`flex items-center py-2 gap-2 cursor-pointer rounded-md px-2 
    ${
      pathname === "/admin/dashboard/report_and_insight"
        ? "hover:bg-gray-100"
        : "hover:bg-gray-100"
    }`}
          >
            <LineChart
              size={17}
              className={
                pathname === "/admin/dashboard/report_and_insight"
                  ? "text-[#D02149]"
                  : "text-gray-500"
              }
            />
            <p
              className={`text-xs font-semibold ${
                pathname === "/admin/dashboard/report_and_insight"
                  ? "text-[#A7710D]"
                  : "text-gray-700"
              }`}
            >
              Reports and insight
            </p>
          </div>
        </Link>
      </div>

      <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
        <QrCode size={17} />
        <p className="text-xs font-semibold">QR Generator</p>
      </div>
      <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
        <Link href={"/admin/dashboard/announcement_and_news"}>
          <div
            className={`flex items-center py-2 gap-2 cursor-pointer rounded-md px-2 
    ${
      pathname === "/admin/dashboard/announcement_and_news"
        ? "hover:bg-gray-100"
        : "hover:bg-gray-100"
    }`}
          >
            <MegaphoneIcon
              size={17}
              className={
                pathname === "/admin/dashboard/announcement_and_news"
                  ? "text-[#D02149]"
                  : "text-gray-500"
              }
            />
            <p
              className={`text-xs font-semibold ${
                pathname === "/admin/dashboard/announcement_and_news"
                  ? "text-[#A7710D]"
                  : "text-gray-700"
              }`}
            >
              Announement and news
            </p>
          </div>
        </Link>
      </div>

      <div className="flex items-center py-3 gap-2 cursor-pointer hover:bg-gray-100 rounded-md px-2">
        <Link href={"/"}>
          <div
            className={`flex items-center py-2 gap-2 cursor-pointer rounded-md px-2`}
          >
            <LogOutIcon size={17} />
            <p className="text-xs font-semibold">logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
