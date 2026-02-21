import React from 'react';
import { connect } from 'react-redux';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import SpinnerComponent from '../SpinnerComponent';
import { generateColor, getLabels } from '../../lib/Functions';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';
import { useBarData, nivoBarPath } from '../../lib/hooks/useChartsData';

interface BarChartComponentProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
  layout: string;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({
  months,
  person,
  validity,
  sellType,
}) => {
  const { data, isLoading } = useBarData(nivoBarPath, [person, months, sellType, validity]);

  const bars = data
    ? getLabels(data).map((label, index) => {
        return <Bar key={index} type="monotone" dataKey={label} fill={generateColor()} />;
      })
    : [];

  const barChart = (
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

  return <SpinnerComponent isDataLoaded={!isLoading}>{barChart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(BarChartComponent);
