"use client";
import { useState } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationMenuDemo } from "./Navigation-menu";

const allChartData = [
  { month: "Jan", desktop: 2000, mobile: 4000 },
  { month: "Feb", desktop: 2500, mobile: 6000 },
  { month: "Mar", desktop: 1500, mobile: 1000 },
  { month: "Apr", desktop: 4000, mobile: 7000 },
  { month: "May", desktop: 3000, mobile: 4000 },
  { month: "Jun", desktop: 4500, mobile: 5000 },
  { month: "Jul", desktop: 8000, mobile: 6000 },
  { month: "Aug", desktop: 3000, mobile: 4500 },
  { month: "Sep", desktop: 5000, mobile: 7000 },
  { month: "Oct", desktop: 2000, mobile: 4000 },
  { month: "Nov", desktop: 6000, mobile: 3000 },
  { month: "Dec", desktop: 4000, mobile: 1000 },
];

const chartConfig = {
  desktop: {
    label: "Chosen Period",
    color: "#3366FF",
  },
  mobile: {
    label: "Last Period",
    color: "#00BFA6",
  },
};

export function Chart() {
  const [selectedType, setSelectedType] = useState<"all" | "desktop" | "mobile">("all");

  return (
    <Card className=" border-none shadow-none">
      <CardContent className="h-[350px]">
        <div className="flex justify-between gap-6 mb-4">
          <h1 className="flex items-center gap-2">
            Select Period:
            <NavigationMenuDemo onSelect={setSelectedType} />
          </h1>
          <div className="flex items-center gap-2">
            {selectedType === "all" || selectedType === "desktop" ? (
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: chartConfig.desktop.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {chartConfig.desktop.label}
                </span>
              </div>
            ) : null}
            {selectedType === "all" || selectedType === "mobile" ? (
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: chartConfig.mobile.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {chartConfig.mobile.label}
                </span>
              </div>
            ) : null}
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={allChartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
            <Tooltip />
            {(selectedType === "all" || selectedType === "desktop") && (
              <Area
                type="monotone"
                dataKey="desktop"
                stroke={chartConfig.desktop.color}
                fill={chartConfig.desktop.color}
                fillOpacity={0.1}
                strokeWidth={3}
                name={chartConfig.desktop.label}
              />
            )}
            {(selectedType === "all" || selectedType === "mobile") && (
              <Area
                type="monotone"
                dataKey="mobile"
                stroke={chartConfig.mobile.color}
                fill={chartConfig.mobile.color}
                fillOpacity={0.1}
                strokeWidth={3}
                name={chartConfig.mobile.label}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
