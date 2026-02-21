import React, { useMemo } from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { connect } from 'react-redux';

import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { generateColor } from '../../../shared/utils/Functions';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { usePieData, nivoPiePath } from '../../../shared/hooks/useChartsData';

interface PieChartYearlyProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const PieChartYearly: React.FC<PieChartYearlyProps> = ({ months, person, validity, sellType }) => {
  const { data, isLoading } = usePieData(nivoPiePath, [months, person, validity, sellType]);

  const color = useMemo(() => generateColor(), [data]);

  const pieChart = (
    <div className="recharts-pie-graph">
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

  return <SpinnerComponent isDataLoaded={!isLoading}>{pieChart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(PieChartYearly);
