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

import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { connect } from 'react-redux';
import { generateColor, getLabels } from '../../../shared/utils/Functions';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { useBarData, nivoBarPath } from '../../../shared/hooks/useChartsData';

interface StackedGraphComponentProps {
  person: string;
  months: string;
  sellType: string;
  validity: string;
}

const StackedGraphComponent: React.FC<StackedGraphComponentProps> = ({
  person,
  months,
  sellType,
  validity,
}) => {
  const { data, isPending, isError } = useBarData(nivoBarPath, [months, person, validity, sellType]);

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

  const stackedGraph = (
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

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      {stackedGraph}
    </SpinnerComponent>
  );
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(StackedGraphComponent);
