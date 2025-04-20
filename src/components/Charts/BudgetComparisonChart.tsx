'use client'; // 👈 Required for Next.js Client Components

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type BudgetComparisonChartProps = {
  data: {
    month: string;
    budgeted: number;
    actual: number;
  }[];
};

export function BudgetComparisonChart({ data }: BudgetComparisonChartProps) {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data available</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="budgeted" stroke="#8884d8" />
        <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
