"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Branch = {
  id: string
  region: string
  district: string
  city: string
  branch_name: string
  grade: string
  phone: string
  date_created: string
}

// Column definition
export const branch_columns: ColumnDef<Branch>[] = [
  {
    accessorKey: "id",
    header: "Branch ID",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
  {
    accessorKey: "district",
    header: "District",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "branch_name",
    header: "Branch Name",
  },
  {
    accessorKey: "grade",
    header: "Grade",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "date_created",
    header: "Date Created",
  },
]

// Async function to return mock branch data
export async function getBranches(): Promise<Branch[]> {
  return [
    {
      id: "b001",
      region: "North",
      distrit: "District A",
      city: "New York",
      branch_name: "Manhattan Branch",
      grade: "A",
      phone: "+1-212-555-0123",
      date_created: "2024-01-10",
    },
    {
      id: "b002",
      region: "South",
      distrit: "District B",
      city: "Atlanta",
      branch_name: "Downtown Branch",
      grade: "B",
      phone: "+1-404-555-0456",
      date_created: "2024-02-15",
    },
    {
      id: "b003",
      region: "East",
      distrit: "District C",
      city: "Boston",
      branch_name: "Cambridge Branch",
      grade: "A",
      phone: "+1-617-555-0789",
      date_created: "2024-03-05",
    },
    {
      id: "b004",
      region: "West",
      distrit: "District D",
      city: "San Francisco",
      branch_name: "Bay Branch",
      grade: "A+",
      phone: "+1-415-555-0234",
      date_created: "2024-04-20",
    },
    {
      id: "b005",
      region: "Central",
      distrit: "District E",
      city: "Chicago",
      branch_name: "Loop Branch",
      grade: "B+",
      phone: "+1-312-555-0678",
      date_created: "2024-05-12",
    },
  ]
}
