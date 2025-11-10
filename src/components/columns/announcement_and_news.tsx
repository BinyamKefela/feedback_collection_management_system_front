"use client"

import { ColumnDef } from "@tanstack/react-table"

// Define the Announcement type
export type Announcement = {
  id: string
  title: string
  description: string
  author: string
  date_posted: string
  category: string
}

// Column definition
export const announcement_columns: ColumnDef<Announcement>[] = [
  {
    accessorKey: "id",
    header: "Announcement ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "date_posted",
    header: "Date Posted",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
]

// Async function to return mock announcement data
export async function getAnnouncements(): Promise<Announcement[]> {
  return [
    {
      id: "a001",
      title: "System Maintenance",
      description:
        "Scheduled maintenance will occur on November 15, 2025, from 12:00 AM to 4:00 AM. Services may be temporarily unavailable.",
      author: "Admin Team",
      date_posted: "2025-11-01",
      category: "Maintenance",
    },
    {
      id: "a002",
      title: "New HR Policy Update",
      description:
        "A new work-from-home policy has been introduced effective December 1, 2025. Check your email for full details.",
      author: "HR Department",
      date_posted: "2025-11-05",
      category: "Policy",
    },
    {
      id: "a003",
      title: "Year-End Party Invitation",
      description:
        "Join us for the annual year-end celebration on December 20, 2025, at the Downtown Conference Center.",
      author: "Events Committee",
      date_posted: "2025-11-07",
      category: "Event",
    },
    {
      id: "a004",
      title: "New Branch Opening",
      description:
        "We’re excited to announce the opening of our new branch in Seattle next month. More details to follow soon.",
      author: "Corporate Communications",
      date_posted: "2025-10-28",
      category: "Announcement",
    },
    {
      id: "a005",
      title: "Employee of the Month",
      description:
        "Congratulations to Emma Thompson from the Support Department for being recognized as November’s Employee of the Month!",
      author: "HR Department",
      date_posted: "2025-11-08",
      category: "Recognition",
    },
  ]
}
