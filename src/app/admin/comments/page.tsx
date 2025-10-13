"use client";
import FeedbacksReceivedTable from "@/components/admin/tables/feedbacks_received";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DashboardStatsRow from "@/components/admin/dashboard_stats_cards";
import FeedbacksBarChart from "@/components/admin/charts/feedbackBarChart";
import FeedbacksCollectedCustomChart from "@/components/admin/charts/feedbacksCollectedCustomChart";
import CommentsCards from "@/components/admin/comments_cards";

function Page() {
  return (
    <div className="ml-3">
      <div>
    <div className="flex flex-col w-full items-center space-y-6">
      {/* Dashboard cards */}
      {/*<div className="w-full max-w-8xl px-3">
        <DashboardCards />
      </div>*/}
      <div className="w-full">
      <h3 className="ml-5 text-lg font-bold">Comments</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6 bg-white rounded-lg">
        <CommentsCards/>
      </div>

      

      {/* Table */}
      <div className="w-full max-w-6xl px-2 mt-3  ">
        
        <FeedbacksReceivedTable />
        
        
      </div>
    </div>
    </div>
    
    </div>
  );
}

export default Page;
