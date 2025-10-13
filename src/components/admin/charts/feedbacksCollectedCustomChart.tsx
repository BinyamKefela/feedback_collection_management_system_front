"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OpenEllipseGreen from "./open_ellipse_green";
import OpenEllipseGolden from "./open_ellipse_golden";
import OpenEllipseBlue from "./open_ellipse_blue";

export default function FeedbacksCollectedCustomChart() {
  return (
    <Card className="w-full">
      

      <CardContent className="h-[400px] lg:h-[200px]">
        <div className="flex flex-col">
          <h2 className="font-medium">Feedbacks collected</h2>
        <div
          className="
            flex flex-wrap
            justify-around
            items-center
            gap-6
          "
        >
          {/* Green Ellipse Column */}
          <div className="flex flex-col items-center space-y-2">
            <OpenEllipseGreen />
            
          </div>

          {/* Golden Ellipse Column */}
          <div className="flex flex-col items-center space-y-2">
            <OpenEllipseGolden />
            
          </div>

          {/* Blue Ellipse Column */}
          <div className="flex flex-col items-center space-y-2">
            <OpenEllipseBlue />
            
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-10">
          <div>
            <div
              className="w-8 h-2 rounded-sm"
              style={{ backgroundColor: "#22c55e" }} // Tailwind green-500
            ></div>
            <span className="text-xs font-medium text-muted-foreground">
              Green Ellipse
            </span>
          </div>
          <div>
            <div
              className="w-8 h-2 rounded-sm"
              style={{ backgroundColor: "#eab308" }} // Tailwind yellow-500
            ></div>
            <span className="text-xs font-medium text-muted-foreground">
              Golden Ellipse
            </span>
          </div>
          <div>
            <div
              className="w-8 h-2 rounded-sm"
              style={{ backgroundColor: "#3b82f6" }} // Tailwind blue-500
            ></div>
            <span className="text-xs font-medium text-muted-foreground">
              Blue Ellipse
            </span>
          </div>
        </div>
        </div>
      </CardContent>
    </Card>
  );
}
