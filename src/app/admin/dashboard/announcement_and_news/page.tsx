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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ShadcnLineChart from "@/components/admin/charts/feedbackOverTimeLineChart";
import ShadcnPieChart from "@/components/admin/charts/feedbackByType";
import OverallRatingCard from "@/components/admin/charts/overallRating";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { announcement_columns, getAnnouncements } from "@/components/columns/announcement_and_news";

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getP();
  }, []);

  async function getP() {
    const results = await getAnnouncements();
    setData(results);
  }

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const setModalVisibility = () => {
    if (modalIsVisible === true) {
      setModalIsVisible(false);
    } else {
      setModalIsVisible(true);
    }
  };
  return (
    <div className="ml-3">
      <div>
        <h3 className="mb-3 ml-1 font-semibold mt-2">Announcement and news</h3>
        <div className="flex flex-col w-full items-center space-y-6">
          {/* Dashboard cards */}
          {/*<div className="w-full max-w-8xl px-3">
        <DashboardCards />
      </div>*/}
         
          
          {/* Table */}
          {/*<div className="w-full max-w-6xl px-2 mt-3  ">
            <FeedbacksReceivedTable setModalVisibility={setModalVisibility} />
          </div>*/}
          
          <div className="flex w-full justify-center">
            <Card className="w-full ">
              <CardContent className="w-full gap-y-4">
                <h3 className="px-4 mb-2">Announcements table</h3>
                <div>
                  <div className="flex flex-row justify-between px-4 text-xs">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="Search here..."
                    />
                    <div className="flex flex-row">
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="border-1 cursor-pointer  border-black mr-2 p-2 rounded">
                            filter here
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full bg-white border-1 p-4 rounded-lg z-50">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <h4 className="leading-none font-medium">
                                Dimensions
                              </h4>
                              <p className="text-muted-foreground text-sm">
                                Set the dimensions for the layer.
                              </p>
                            </div>
                            <div className="grid gap-2">
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">Width</Label>
                                <Input
                                  id="width"
                                  defaultValue="100%"
                                  className="col-span-2 h-8"
                                />
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxWidth">Max. width</Label>
                                <Input
                                  id="maxWidth"
                                  defaultValue="300px"
                                  className="col-span-2 h-8"
                                />
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="height">Height</Label>
                                <Input
                                  id="height"
                                  defaultValue="25px"
                                  className="col-span-2 h-8"
                                />
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxHeight">Max. height</Label>
                                <Input
                                  id="maxHeight"
                                  defaultValue="none"
                                  className="col-span-2 h-8"
                                />
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                      <button className="border-1 border-black mr-2 p-2 rounded bg-[#2159AE] text-white">
                        Export to csv
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-4 w-full max-w-6xl mt-2">
                  <DataTable columns={announcement_columns} data={data} />
                </div>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Page;

function FeedBackModal({
  setModalVisibility,
}: {
  setModalVisibility: (modalIsVisible: boolean) => void;
}) {
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
              <hr className="w-full font-bold text-2xl" />
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 w-[150px] h-[320px] sm:w-[500px]">
              <div className="flex flex-col  justify-start items-start">
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
                <h3 className="text-sm font-semibold ml-7 mt-2">
                  Custom details:
                </h3>
                <p className="text-sm ml-7 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure .
                </p>
              </div>
              <div className="flex flex-col">
                <div className="relative w-full h-55 sm:h-full flex  items-center justify-center">
                  <Image
                    className="object-contain"
                    fill
                    src={"/images/recommendation_detail_modal_pic.svg"}
                    alt="recommendation pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FeedBackDialogue() {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="border-2">Open</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
