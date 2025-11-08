"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payment_columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Feedback ID",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "rating ",
    header: "Rating",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  
]