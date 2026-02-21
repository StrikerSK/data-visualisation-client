import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { generateColor, getLabels } from '../../../shared/utils/Functions';

interface BarChartComponentProps {
  data: any[];
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
  const bars = data
    ? getLabels(data).map((label, index) => {
        return <Bar key={index} type="monotone" dataKey={label} fill={generateColor()} />;
      })
    : [];

  return (
    <ResponsiveContainer>
      <BarChart data={data || []} margin={{ top: 0, right: 5, left: 10, bottom: 0 }}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {bars}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
