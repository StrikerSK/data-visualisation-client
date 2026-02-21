import React, { useState, useEffect, ReactNode } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { connect } from 'react-redux';

import { fetchBarData, nivoBarPath } from '../../lib/DataFetcher';
import SpinnerComponent from '../SpinnerComponent';
import { generateColor, getLabels } from '../../lib/Functions';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';

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
  const [data, setData] = useState<any[]>([]);
  const [line, setLine] = useState<ReactNode[]>([]);
  const [area, setArea] = useState<ReactNode[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

  const processData = (result: any[]) => {
    const lines: ReactNode[] = [];
    const areas: ReactNode[] = [];

    getLabels(result).forEach((label) => {
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

    setData(result);
    setArea(areas);
    setLine(lines);
  };

  useEffect(() => {
    fetchBarData(nivoBarPath, [months, person, validity, sellType])
      .then(({ data }) => processData(data))
      .then(() => changeLoadedState(true))
      .catch(console.error);
  }, [months, person, validity, sellType]);

  const lineGraph = (
    <ResponsiveContainer>
      <LineChart data={data} margin={{ top: 0, right: 5, left: 10, bottom: 0 }}>
        <defs>{area}</defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        {line}
      </LineChart>
    </ResponsiveContainer>
  );

  return <SpinnerComponent isDataLoaded={isLoaded}>{lineGraph}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(LineGraphComponent);
