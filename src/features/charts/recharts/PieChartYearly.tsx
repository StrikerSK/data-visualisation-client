import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { generateColor } from '../../../shared/utils/Functions';

interface PieChartYearlyProps {
  data: any[];
}

const PieChartYearly: React.FC<PieChartYearlyProps> = ({ data }) => {
  const color = React.useMemo(() => generateColor(), [data]);

  return (
    <div className="recharts-pie-graph" style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data || []}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            fill={color}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
              if (midAngle === undefined) return null;
              const RADIAN = Math.PI / 180;
              const radius = 25 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill={color}
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {data ? data[index].id : ''} ({value})
                </text>
              );
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartYearly;
