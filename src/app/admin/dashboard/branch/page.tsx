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
  DialogFooter,
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

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { branch_columns, getBranches } from "@/components/columns/branch_columns";

const branchSchema = z.object({
  region: z.string().min(1, "Region is required"),
  branch: z.string().min(1, "Branch is required"),
  grade: z.string().optional(),
  phone: z
    .string()
    .min(7, "Enter a valid phone number")
    .max(15, "Phone number too long"),
});

type BranchFormValues = z.infer<typeof branchSchema>;

async function getPayments() {
  return [
    {
      id: "728ed52f",
      date: "2025-01-01",
      customer: "customer-1",
      type: "Comment",
      department: "Support",
      rating: 4,
      status: "pending",
    },
    {
      id: "728ed52c",
      date: "2025-01-02",
      customer: "customer-2",
      type: "Comment",
      department: "Sales",
      rating: 5,
      status: "pending",
    },
    {
      id: "728ed52c",
      date: "2025-01-02",
      customer: "customer-2",
      type: "Comment",
      department: "Sales",
      rating: 5,
      status: "pending",
      email: "mvjewkvne@example.com",
    },
    {
      id: "728ed52f",
      date: "2025-01-01",
      customer: "customer-1",
      type: "Comment",
      department: "Support",
      rating: 4,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      date: "2025-01-01",
      customer: "customer-1",
      type: "Comment",
      department: "Support",
      rating: 4,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      date: "2025-01-01",
      customer: "customer-1",
      type: "Comment",
      department: "Support",
      rating: 4,
      status: "pending",
      email: "m@example.com",
    },
  ];
}

function Page() {
  const [data, setData] = useState([]);

  const [branchOpen, setBranchOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BranchFormValues>({
    resolver: zodResolver(branchSchema),
  });

  const selectedBranch = watch("branch");

  const onSubmit = (data: BranchFormValues) => {
    console.log("Submitted Branch Form:", data);
    reset();
  };

  // Example static options
  const regions = ["North", "South", "East", "West"];
  const branches = [
    "Central City Branch",
    "Downtown Branch",
    "Lakeside Branch",
    "Mountainview Branch",
  ];

  useEffect(() => {
    getP();
  }, []);

  async function getP() {
    const results = await getBranches();
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
        <div className="flex flex-col w-full items-center space-y-6">
          {/* Dashboard cards */}
          {/*<div className="w-full max-w-8xl px-3">
        <DashboardCards />
      </div>*/}
          <div className="w-full">
            <h3 className="ml-5 text-lg font-bold">Branch Management</h3>
          </div>

          {/* Table */}
          {/*<div className="w-full max-w-6xl px-2 mt-3  ">
            <FeedbacksReceivedTable setModalVisibility={setModalVisibility} />
          </div>*/}
          <div className="flex w-full justify-center">
            <Card className="w-full ">
              <CardContent className="w-full gap-y-4">
                <h3 className="px-4 mb-2">Branches</h3>
                <div>
                  <div className="flex flex-row justify-between px-4 text-xs">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="Search here..."
                    />
                    <div className="flex flex-row">
                      <Dialog>
                        <DialogTrigger>
                          <button className="border-1 cursor-pointer border-black mr-2 p-2 rounded bg-[#2159AE] text-white">
                            add branch
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle className="text-lg font-semibold">
                              Add Branch
                            </DialogTitle>
                          </DialogHeader>

                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-4 mt-2"
                          >
                            {/* Region dropdown */}
                            <div className="flex flex-col space-y-1">
                              <Label htmlFor="region">Select Your Region</Label>
                              <Select
                                onValueChange={(v) => setValue("region", v)}
                              >
                                <SelectTrigger id="region">
                                  <SelectValue placeholder="Select a region" />
                                </SelectTrigger>
                                <SelectContent>
                                  {regions.map((region) => (
                                    <SelectItem key={region} value={region}>
                                      {region}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {errors.region && (
                                <p className="text-xs text-red-500">
                                  {errors.region.message}
                                </p>
                              )}
                            </div>

                            {/* Branch searchable dropdown */}
                            <div className="flex flex-col space-y-1">
                              <Label htmlFor="branch">
                                Search Here for Branch
                              </Label>
                              <div>
                                <Button
                                  type="button"
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={branchOpen}
                                  className="w-full justify-between"
                                  onClick={() => setBranchOpen(!branchOpen)}
                                >
                                  {selectedBranch || "Select a branch"}
                                  <ChevronsUpDown className="opacity-50 w-4 h-4" />
                                </Button>

                                {branchOpen && (
                                  <div className="relative mt-1">
                                    <Command className="border rounded-md bg-white shadow-md">
                                      <CommandInput placeholder="Search branch..." />
                                      <CommandList>
                                        <CommandEmpty>
                                          No branches found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                          {branches.map((branch) => (
                                            <CommandItem
                                              key={branch}
                                              value={branch}
                                              onSelect={() => {
                                                setValue("branch", branch);
                                                setBranchOpen(false);
                                              }}
                                            >
                                              <Check
                                                className={cn(
                                                  "mr-2 h-4 w-4",
                                                  branch === selectedBranch
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                )}
                                              />
                                              {branch}
                                            </CommandItem>
                                          ))}
                                        </CommandGroup>
                                      </CommandList>
                                    </Command>
                                  </div>
                                )}
                              </div>
                              {errors.branch && (
                                <p className="text-xs text-red-500">
                                  {errors.branch.message}
                                </p>
                              )}
                            </div>

                            {/* Grade (optional) */}
                            <div className="flex flex-col space-y-1">
                              <Label htmlFor="grade">
                                Type Grade Here (optional)
                              </Label>
                              <Input
                                id="grade"
                                placeholder="Enter grade"
                                {...register("grade")}
                              />
                            </div>

                            {/* Phone number */}
                            <div className="flex flex-col space-y-1">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input
                                id="phone"
                                type="tel"
                                placeholder="Enter phone number"
                                {...register("phone")}
                              />
                              {errors.phone && (
                                <p className="text-xs text-red-500">
                                  {errors.phone.message}
                                </p>
                              )}
                            </div>

                            <DialogFooter className="mt-4">
                              <Button type="submit">Save Branch</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>

                      <button className="border-1 border-black mr-2 p-2 rounded bg-[#2159AE] text-white">
                        Export to csv
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-4 w-full max-w-6xl mt-2">
                  <DataTable columns={branch_columns} data={data} />
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
