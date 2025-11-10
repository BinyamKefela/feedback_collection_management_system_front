"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string
  full_name: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const user_columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "User ID",
  },
  {
    accessorKey: "full_name",
    header: "Full Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "status ",
    header: "status",
  },
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey:"last_login",
    header: "Last Login"
  }
  
]