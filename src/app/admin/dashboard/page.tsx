"use client";
import FeedbacksReceivedTable from "@/components/admin/tables/feedbacks_received";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DashboardStatsRow from "@/components/admin/dashboard_stats_cards";
import FeedbacksBarChart from "@/components/admin/charts/feedbackBarChart";
import FeedbacksCollectedCustomChart from "@/components/admin/charts/feedbacksCollectedCustomChart";
import { useState } from "react";

function Page() {

  const [modalIsVisible,setModalIsVisible] = useState(false)
  const setModalVisibility = ()=>{
    if(modalIsVisible===true){
      setModalIsVisible(false)
    }
    else{
      setModalIsVisible(true)
    }
  }
  return (
    <div className="ml-3">
      <div>
    <div className="flex flex-col w-full items-center space-y-6">
      {/* Dashboard cards */}
      {/*<div className="w-full max-w-8xl px-3">
        <DashboardCards />
      </div>*/}
      <div className="w-full">
      <h3 className="ml-5 text-lg font-bold">Dashboard</h3>
      {modalIsVisible && <FeedBackModal setModalVisibility={setModalIsVisible}/>}
      </div>
      <div className="flex flex-col items-center justify-center space-y-6 bg-white rounded-lg">
        <DashboardStatsRow/>
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-5 px-3 w-full max-w-6xl mx-auto">
        <div className="h-[250px]">
          <FeedbacksBarChart/>
        </div>
        <div className="h-[250px] mb-50 lg:mb-0">
          {/*<UserChart />*/}
          <FeedbacksCollectedCustomChart/>
        </div>
      </div>

      {/* Table */}
      <div className="w-full max-w-6xl px-2 mt-3  ">
        
        <FeedbacksReceivedTable setModalVisibility={setModalVisibility} />
        
      </div>
    </div>
    </div>
    
    </div>
  );
}

export default Page;


function FeedBackModal({setModalVisibility}:{setModalVisibility:(modalIsVisible:boolean)=>void}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <Card className="w-[50%] h-[50%] flex items-center justify-center">
        <CardContent className="w-full h-full flex flex-col items-center justify-center">
          <h1 onClick={()=>setModalVisibility(false)}>This is the hidden modal</h1>
        </CardContent>
      </Card>
    </div>
  );
}

