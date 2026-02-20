import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import React, { useEffect, useState, ReactNode } from 'react';

import { fetchBarData, nivoBarPath } from '../../lib/DataFetcher';
import SpinnerComponent from '../SpinnerComponent';
import { connect } from 'react-redux';
import { generateColor, getLabels } from '../../lib/Functions';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';

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
  const [data, setData] = useState<any[]>([]);
  const [area, setArea] = useState<ReactNode[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

  const processData = (data: any[]) => {
    setData(data);
    setArea(
      getLabels(data).map((label) => {
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
    );
  };

  useEffect(() => {
    fetchBarData(nivoBarPath, [months, person, validity, sellType])
      .then(({ data }) => processData(data))
      .then(() => changeLoadedState(true))
      .catch(console.error);
  }, [months, person, validity, sellType]);

  const stackedGraph = (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, right: 5, left: 10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mesiac" />
        <YAxis />
        <Tooltip />
        {area}
      </AreaChart>
    </ResponsiveContainer>
  );

  return <SpinnerComponent children={stackedGraph} isDataLoaded={isLoaded} />;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(StackedGraphComponent);
