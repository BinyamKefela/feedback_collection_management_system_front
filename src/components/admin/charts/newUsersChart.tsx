import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A single blue bar chart for new users"

const chartData = [
  { year: 2019, users: 1200 },
  { year: 2020, users: 3500 },
  { year: 2021, users: 4800 },
  { year: 2022, users: 6200 },
  { year: 2023, users: 8300 },
  { year: 2024, users: 9100 },
  { year: 2025, users: 9700 },
]

const chartConfig = {
  users: {
    label: "New Users",
    color: "blue",
  },
} satisfies ChartConfig

export function NewUserChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New users</CardTitle>
      </CardHeader>

      {/* Increased card height slightly for better visual balance */}
      <CardContent className="w-full h-[220px] p-2">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 10, right: 15, left: 10, bottom: 10 }}
            barCategoryGap="25%" // tighter gaps
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              fontSize={11}
            />
            <YAxis
              domain={[0, 10000]}
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            {/* ✅ Thicker bars that fill vertically */}
            <Bar dataKey="users" fill="blue" radius={[4, 4, 0, 0]} barSize={40} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
