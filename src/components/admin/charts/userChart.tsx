"use client";

import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Two-category data
const chartData = [
  { name: "Male", value: 400, fill: "#3B82F6" },
  { name: "Female", value: 300, fill: "#EC4899" },
];

// Optional config for ShadCN chart system
const chartConfig = {
  male: { label: "Male", color: "#3B82F6" },
  female: { label: "Female", color: "#EC4899" },
};

export function UserChart() {
  return (
    <Card className="w-full  relative">
      {/* Header with custom legend */}
      <CardHeader className="flex flex-row justify-between items-start pb-2">
        <CardTitle>User Distribution</CardTitle>

        {/* Legend */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-sm bg-[#3B82F6]" />
            <span className="text-xs text-gray-600">Male</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-sm bg-[#EC4899]" />
            <span className="text-xs text-gray-600">Female</span>
          </div>
        </div>
      </CardHeader>

      {/* Chart */}
      <CardContent className="">
        <ChartContainer config={chartConfig} className="w-full h-[160px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={70}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
