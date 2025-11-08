import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function OverallRatingCard() {
  const fullStars = 4;
  const totalStars = 5;

  const [progress, setProgress] = useState({
    service: 0,
    satisfaction: 0,
    resolving: 0,
  });

  useEffect(() => {
    // Sequential animation
    const timers: NodeJS.Timeout[] = [];

    timers.push(
      setTimeout(() => {
        setProgress((prev) => ({ ...prev, service: 4.5 }));
      }, 300)
    );

    timers.push(
      setTimeout(() => {
        setProgress((prev) => ({ ...prev, satisfaction: 2.8 }));
      }, 1200)
    );

    timers.push(
      setTimeout(() => {
        setProgress((prev) => ({ ...prev, resolving: 4.8 }));
      }, 2100)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Card className="w-full h-[400px] lg:h-[350px] flex flex-col justify-between">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Overall Rating</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col justify-between h-full">
        {/* Rating number + stars */}
        <div className="flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-1">
            Rating based on customers
          </p>

          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold leading-none">4</span>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalStars }).map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  fill={i < fullStars ? "#FFD700" : "white"}
                  stroke={i < fullStars ? "#FFD700" : "#D1D5DB"}
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-500" />

        {/* Rating bars */}
        <div className="space-y-3">
          {/* 1. Service Quality */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span>Service Quality</span>
              <span>{progress.service.toFixed(1)}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-2 bg-green-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(progress.service / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* 2. Customer Satisfaction */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span>Customer Satisfaction</span>
              <span>{progress.satisfaction.toFixed(1)}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-2 bg-orange-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(progress.satisfaction / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* 3. Resolving Quality */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1">
              <span>Resolving Quality</span>
              <span>{progress.resolving.toFixed(1)}</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-2 bg-green-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(progress.resolving / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
