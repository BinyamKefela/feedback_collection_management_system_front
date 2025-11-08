import React, { useMemo, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function ShadcnLineChart() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger re-render after mount so Chart.js sees a "new draw"
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const baseData = {
    blue: [320, 340, 370, 410, 460, 500, 480, 450, 420, 390, 350, 320],
    green: [300, 330, 360, 395, 435, 480, 470, 440, 405, 375, 340, 310],
    red: [310, 335, 365, 405, 455, 495, 485, 455, 425, 395, 360, 330],
  };

  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        label: "Blue series",
        data: animate ? baseData.blue : baseData.blue.map(() => null),
        tension: 0.35,
        fill: true,
        backgroundColor: "rgba(59,130,246,0.08)",
        borderColor: "rgba(59,130,246,1)",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Green series",
        data: animate ? baseData.green : baseData.green.map(() => null),
        tension: 0.35,
        fill: true,
        backgroundColor: "rgba(16,185,129,0.08)",
        borderColor: "rgba(16,185,129,1)",
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Red series",
        data: animate ? baseData.red : baseData.red.map(() => null),
        tension: 0.35,
        fill: true,
        backgroundColor: "rgba(239,68,68,0.08)",
        borderColor: "rgba(239,68,68,1)",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  }), [animate]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { boxWidth: 12, boxHeight: 6, padding: 12 },
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
      datalabels: {
      display: false,
    },
    },
    interaction: { mode: "nearest" as const, axis: "x" as const, intersect: false },
    scales: {
      x: { grid: { display: false }, ticks: { maxRotation: 0, minRotation: 0 } },
      y: {
        min: 300,
        max: 500,
        ticks: { stepSize: 50 },
        grid: { borderDash: [4, 4] },
      },
    },
    elements: { line: { tension: 0.35 } },
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
      delay(ctx: any) {
        // Stagger each dataset and its data points
        if (ctx.type === "data" && ctx.mode === "default") {
          return ctx.datasetIndex * 1000 + ctx.dataIndex * 100;
        }
        return 0;
      },
    },
  }), []);

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Monthly Values (Jan–Dec)</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] lg:h-[250px]">
        <div className="flex h-full">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
