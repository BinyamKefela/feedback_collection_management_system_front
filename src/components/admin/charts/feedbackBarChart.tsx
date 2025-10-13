"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", value: 500 },
  { month: "Feb", value: 800 },
  { month: "Mar", value: 1200 },
  { month: "Apr", value: 1600 },
  { month: "May", value: 2000 },
  { month: "Jun", value: 2500 },
  { month: "Jul", value: 2300 },
  { month: "Aug", value: 1900 },
  { month: "Sep", value: 1500 },
  { month: "Oct", value: 1000 },
  { month: "Nov", value: 700 },
  { month: "Dec", value: 900 },
];

export default function FeedbacksBarChart() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Feedbacks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis className="text-xs" dataKey="month" tick={{ fill: "#6b7280" }} />
              <YAxis className="text-xs" domain={[0, 2500]} tick={{ fill: "#6b7280" }} />
              <Tooltip
                cursor={{ fill: "rgba(34,197,94,0.1)" }}
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                }}
              />
              <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
