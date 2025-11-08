import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

export default function ShadcnPieChart() {
  const data = useMemo(() => ({
    labels: ["Comment (Red)", "Complaint (Green)", "Recommendation (Blue)"],
    datasets: [
      {
        label: "",
        data: [2000, 3000, 4500],
        backgroundColor: [
          "rgba(239,68,68,0.8)",  // red
          "rgba(16,185,129,0.8)", // green
          "rgba(59,130,246,0.8)", // blue
        ],
        borderColor: [
          "rgba(239,68,68,1)",
          "rgba(16,185,129,1)",
          "rgba(59,130,246,1)",
        ],
        borderWidth: 1,
      },
    ],
  }), []);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,  // 🔑 This fixes the squish/left align issue
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          font: { size: 11 },
          padding: 8,
        },
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold" as const,
          size: 12,
        },
        formatter: (value: number) => value.toLocaleString(),
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.parsed || 0;
            return ` ${value.toLocaleString()}`;
          },
        },
      },
    },
  }), []);

  return (
    <Card className="w-full max-w-3xl ">
      <CardHeader>
        <CardTitle>Feedback Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <div className="relative w-[350px] h-[400px] lg:h-[250px]">
          <Pie data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
