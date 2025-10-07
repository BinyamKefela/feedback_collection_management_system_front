"use client";

import { FeedBackChart } from "@/components/charts/feedbackChart";
import { UserChart } from "@/components/charts/userChart";
import DashboardCards from "@/components/dashboard_cards";

function Page() {
  return (
    <div className="flex flex-col w-full items-center">
      {/* Dashboard cards */}
      <div className="w-full max-w-7xl px-4">
        <DashboardCards />
      </div>

      {/* Charts section */}
      <div className="w-full max-w-7xl px-4  grid grid-cols-1 md:grid-cols-2 gap-4 transform scale-y-70 scale-x-90">
        <div className="w-full ">
          <FeedBackChart />
        </div>
        <div className="w-full ">
          <UserChart />
        </div>
      </div>
    </div>
  );
}

export default Page;
