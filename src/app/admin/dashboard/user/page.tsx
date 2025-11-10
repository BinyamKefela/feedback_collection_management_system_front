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
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import { user_columns } from "@/components/columns/user_columns";
export async function getUsers() {
  return [
    {
      id: "u001",
      full_name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Admin",
      department: "IT",
      status: "active",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      last_login: "2025-11-05T10:24:00Z",
    },
    {
      id: "u002",
      full_name: "Brian Smith",
      email: "brian.smith@example.com",
      role: "Manager",
      department: "Sales",
      status: "active",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      last_login: "2025-11-06T08:15:00Z",
    },
    {
      id: "u003",
      full_name: "Carla Reyes",
      email: "carla.reyes@example.com",
      role: "Support Agent",
      department: "Support",
      status: "pending",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      last_login: "2025-11-03T16:42:00Z",
    },
    {
      id: "u004",
      full_name: "Daniel Kim",
      email: "daniel.kim@example.com",
      role: "Engineer",
      department: "Development",
      status: "inactive",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      last_login: "2025-10-29T09:55:00Z",
    },
    {
      id: "u005",
      full_name: "Emma Thompson",
      email: "emma.thompson@example.com",
      role: "HR Specialist",
      department: "Human Resources",
      status: "active",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      last_login: "2025-11-07T13:30:00Z",
    },
  ];
}


const userSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  branch: z.string().min(1, "Branch is required"),
  role: z.string().min(1, "Role is required"),
  image: z.instanceof(File).optional(),
});

type User = z.infer<typeof userSchema>;

function Page() {


    const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
  });

  const imageFile = watch("image");

  // 🖼 Drag & Drop setup
  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles[0]) {
        setValue("image", acceptedFiles[0]);
      }
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  // 🧾 Submit handler
  const onSubmit = (data: User) => {
    console.log("User form submitted:", data);
    reset();
  };


  const [data, setData] = useState([]);

  useEffect(() => {
    getP();
  }, []);

  async function getP() {
    const results = await getUsers();
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
            <h3 className="ml-5 text-lg font-bold">User Management</h3>
          </div>

          {/* Table */}
          {/*<div className="w-full max-w-6xl px-2 mt-3  ">
            <FeedbacksReceivedTable setModalVisibility={setModalVisibility} />
          </div>*/}
          <div className="flex w-full justify-center">
            <Card className="w-full ">
              <CardContent className="w-full gap-y-4">
                <h3 className="px-4 mb-2">Users</h3>
                <div>
                  <div className="flex flex-row justify-between px-4 text-xs">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="Search here..."
                    />
                    <div className="flex flex-row">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="bg-[#2159AE] text-white mr-4 px-2 rounded cursor-pointer">add user</button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Add User</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
          {/* Full name */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              {...register("fullName")}
              placeholder="Enter full name"
            />
            {errors.fullName && (
              <p className="text-xs text-red-500">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Branch */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="branch">Branch</Label>
            <Input
              id="branch"
              {...register("branch")}
              placeholder="Enter branch"
            />
            {errors.branch && (
              <p className="text-xs text-red-500">{errors.branch.message}</p>
            )}
          </div>

          {/* Role */}
          <div className="flex flex-col space-y-1">
            <Label htmlFor="role">Role of the User</Label>
            <Input id="role" {...register("role")} placeholder="Enter role" />
            {errors.role && (
              <p className="text-xs text-red-500">{errors.role.message}</p>
            )}
          </div>

          {/* Image upload */}
          <div className="flex flex-col space-y-1">
            <Label>User Image</Label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-md flex flex-col items-center justify-center p-6 text-center cursor-pointer transition ${
                isDragActive
                  ? "border-[#D02149] bg-[#fff5f7]"
                  : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} />
              {imageFile ? (
                <>
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="preview"
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <p className="text-sm text-gray-600">{imageFile.name}</p>
                </>
              ) : (
                <>
                  <UploadCloud size={30} className="text-gray-500 mb-2" />
                  <p className="text-sm text-gray-500">
                    Drag & drop or{" "}
                    <span className="text-[#D02149] font-medium">
                      click to upload
                    </span>
                  </p>
                </>
              )}
            </div>
            {errors.image && (
              <p className="text-xs text-red-500">{errors.image.message}</p>
            )}
          </div>

          <DialogFooter className="mt-4">
            <Button type="submit">Save User</Button>
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
                  <DataTable columns={user_columns} data={data} />
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
