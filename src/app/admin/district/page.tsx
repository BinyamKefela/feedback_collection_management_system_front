"use client";

import { FeedBackChart } from "@/components/admin/charts/feedbackChart";
import { UserChart } from "@/components/admin/charts/userChart";
import DashboardCards from "@/components/admin/dashboard_cards";
import FeedbacksReceivedTable from "@/components/admin/tables/feedbacks_received";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Footer from "../../client/footer";
import { NewUserChart } from "@/components/admin/charts/newUsersChart";

function Page() {
  return (
    <div className="ml-3">
      <div>
    <div className="flex flex-col w-full items-center space-y-6">
      {/* Dashboard cards */}
      <div className="w-full max-w-8xl px-3">
        <DashboardCards />
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-5 px-3 w-full max-w-6xl mx-auto">
        <div className="h-[250px]">
          <FeedBackChart/>
        </div>
        <div className="h-[250px]">
          <UserChart />
        </div>
      </div>

      {/* Table */}
      <div className="w-full max-w-6xl px-2 mt-3  ">
        <Card className="">
          <CardHeader><h3 className="font-semibold">Feedbacks received</h3>
          </CardHeader>
          <CardContent className=" w-full">
        <FeedbacksReceivedTable />
        </CardContent>
        </Card>
      </div>
    </div>
    </div>
    
    </div>
  );
}

export default Page;
