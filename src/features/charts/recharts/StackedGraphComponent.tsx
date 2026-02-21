import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import React, { ReactNode } from 'react';
import { generateColor, getLabels } from '../../../shared/utils/Functions';

interface StackedGraphComponentProps {
  data: any[];
}

const StackedGraphComponent: React.FC<StackedGraphComponentProps> = ({ data }) => {
  const areas: ReactNode[] = data
    ? getLabels(data).map((label) => {
        const generatedColor = generateColor();
        return (
          <Area
            key={label}
            type="monotone"
            dataKey={label}
            stackId="1"
            stroke={generatedColor}
            fill={generatedColor}
          />
        );
      })
    : [];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data || []} margin={{ top: 0, right: 5, left: 10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mesiac" />
        <YAxis />
        <Tooltip />
        {areas}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedGraphComponent;
