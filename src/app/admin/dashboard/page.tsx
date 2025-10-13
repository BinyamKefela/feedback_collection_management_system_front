"use client";
import FeedbacksReceivedTable from "@/components/admin/tables/feedbacks_received";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DashboardStatsRow from "@/components/admin/dashboard_stats_cards";
import FeedbacksBarChart from "@/components/admin/charts/feedbackBarChart";
import FeedbacksCollectedCustomChart from "@/components/admin/charts/feedbacksCollectedCustomChart";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";
import { payment_columns } from "@/components/columns/payment_columns";


async function getPayments(){
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },];
}


function Page() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    getP();
  },[])

  async function getP(){
    const results = await getPayments();
    setData(results);
    
  }

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
      <div>
        <DataTable columns={payment_columns} data={} />
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
      <Card className="relative w-[80%] h-[80%]  sm:w-[50%] sm:h-[70%] flex items-center justify-center">
        {/*Close button */}
        <button
          onClick={() => setModalVisibility(false)}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        <CardContent className="w-full h-full flex flex-col items-center justify-center overflow-y-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center flex-col">
              <h3 className="font-bold mb-2">Details</h3>
              <hr className="w-full font-bold text-2xl"/>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 w-[150px] h-[320px] sm:w-[500px]">
              <div className="flex flex-col  justify-start items-start" >
                <div className="flex flex-wrap gap-5">
                  <h3 className="text-sm font-semibold">Branch location</h3>
                  <h3 className="text-sm">Arat Kilo Branch</h3>
                </div>
                <div className="flex flex-wrap gap-5 mt-2">
                  <h3 className="text-sm font-semibold">Feedback type</h3>
                  <h3 className="text-sm ">recommendation</h3>
                </div>
                <h3 className="text-sm font-semibold mt-2">more details:</h3>
                <div className="flex flex-wrap gap-5 mt-2 ml-7">
                  <h3 className="text-sm font-semibold">age group</h3>
                  <h3 className="text-sm ">18-27</h3>
                </div>
                <h3 className="text-sm font-semibold ml-7 mt-2">Custom details:</h3>
                <p className="text-sm ml-7 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                   .</p>
              </div>
              <div className="flex flex-col">
                <div className="relative w-full h-55 sm:h-full flex  items-center justify-center">
                <Image className="object-contain"  fill src={'/images/recommendation_detail_modal_pic.svg'} alt="recommendation pic"  />
              </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

