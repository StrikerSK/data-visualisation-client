import React, { ReactNode } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { generateColor, getLabels } from '../../../shared/utils/Functions';

interface AreaChartComponentProps {
  data: any[];
}

const AreaChartComponent: React.FC<AreaChartComponentProps> = ({ data }) => {
  const areas: ReactNode[] = [];
  const lines: ReactNode[] = [];

  if (data) {
    getLabels(data).forEach((label) => {
      const generatedColor = generateColor();
      const identification = 'color' + label;

      areas.push(
        <linearGradient key={identification} id={identification} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={generatedColor} stopOpacity={0.8} />
          <stop offset="95%" stopColor={generatedColor} stopOpacity={0} />
        </linearGradient>
      );

      lines.push(
        <Area
          key={label}
          type="monotone"
          dataKey={label}
          stroke={generatedColor}
          fillOpacity={1}
          fill={'url(#' + identification + ')'}
        />
      );
    });
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data || []} margin={{ top: 0, right: 5, left: 10, bottom: 0 }}>
        <defs>{areas}</defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {lines}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
