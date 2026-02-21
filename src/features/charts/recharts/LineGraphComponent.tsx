import React, { ReactNode } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { connect } from 'react-redux';

import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { generateColor, getLabels } from '../../../shared/utils/Functions';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { useBarData, nivoBarPath } from '../../../shared/hooks/useChartsData';

interface LineGraphComponentProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
}

const LineGraphComponent: React.FC<LineGraphComponentProps> = ({
  months,
  person,
  validity,
  sellType,
}) => {
  const { data, isLoading } = useBarData(nivoBarPath, [months, person, validity, sellType]);

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
        <Line
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

  const lineGraph = (
    <ResponsiveContainer>
      <LineChart data={data || []} margin={{ top: 0, right: 5, left: 10, bottom: 0 }}>
        <defs>{areas}</defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {lines}
      </LineChart>
    </ResponsiveContainer>
  );

  return <SpinnerComponent isDataLoaded={!isLoading}>{lineGraph}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(LineGraphComponent);
