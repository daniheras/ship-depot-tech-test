"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_shared/components/Chart/Chart";
import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { MechanicTotalCases } from "../../_server/schema";
import { useMemo } from "react";

const chartConfig = {
  total: {
    label: "Total Cases",
  },
  active: {
    label: "Active",
    color: "hsl(var(--chart-1))",
  },
  pending: {
    label: "Pending",
    color: "hsl(var(--chart-2))",
  },
  finished: {
    label: "Finished",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ActiveCases(data: MechanicTotalCases) {
  const chartData = useMemo(() => {
    return [
      { status: "active", total: data.active, fill: "#456" },
      { status: "pending", total: data.pending, fill: "#765" },
      { status: "finished", total: data.finished, fill: "#956" },
    ];
  }, [data.active, data.pending, data.finished]);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="total"
          nameKey="status"
          innerRadius={60}
          strokeWidth={5}
          activeIndex={0}
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 10} />
          )}
        />
      </PieChart>
    </ChartContainer>
  );
}
