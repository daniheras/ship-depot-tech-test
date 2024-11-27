"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_shared/components/Chart/Chart";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { type CasesPerMonth } from "../../_server/schema";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function CasesPerMonth({ data }: {data: CasesPerMonth}) {
  const chartData = data.slice(-6);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto my-auto aspect-square max-h-[250px]"
    >
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar
          dataKey="total"
          fill="#fff"
          fillOpacity={0.6}
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
        />
      </RadarChart>
    </ChartContainer>
  );
}
