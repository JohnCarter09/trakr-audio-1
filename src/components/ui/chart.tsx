"use client"

import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"

const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
  {
    revenue: 26475,
    subscription: 189,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <Bar
          dataKey="subscription"
          style={
            {
              fill: "var(--chart-1)",
              opacity: 1,
            } as React.CSSProperties
          }
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function OverviewWithLine() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="revenue"
          style={
            {
              stroke: "var(--chart-1)",
            } as React.CSSProperties
          }
        />
      </LineChart>
    </ResponsiveContainer>
  )
}