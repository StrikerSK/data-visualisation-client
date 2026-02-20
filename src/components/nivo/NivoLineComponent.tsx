import React, { useEffect, useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import SpinnerComponent from '../SpinnerComponent';
import { lineDataGetter } from '../../lib/DataFetcher';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { adaptToWidth } from '../../lib/Functions';
import { RootState } from '../../types';

interface NivoLineComponentProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
  color: string;
}

const NivoLineComponent: React.FC<NivoLineComponentProps> = ({
  months,
  person,
  validity,
  sellType,
  color,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

  const finaliseTransaction = (result: any[]) => {
    setData(result);
    changeLoadedState(true);
  };

  useEffect(() => {
    lineDataGetter([months, person, validity, sellType], finaliseTransaction);
  }, [months, person, validity, sellType, color]);

  const LineGraph = (
    <ResponsiveLine
      data={data}
      margin={adaptToWidth(
        { top: 5, right: 15, bottom: 80, left: 65 },
        { top: 5, right: 5, bottom: 85, left: 65 }
      )}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: adaptToWidth(0, -20),
        legendOffset: 26,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 6,
        tickPadding: 3,
        tickRotation: 0,
        legend: 'Predaj lístkov',
        legendOffset: -60,
        legendPosition: 'middle',
      }}
      colors={{ scheme: color as any }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: -40,
          translateY: 60,
          itemWidth: 75,
          itemHeight: 15,
          itemDirection: 'top-to-bottom',
          symbolSize: 12,
          symbolShape: 'circle',
        },
      ]}
    />
  );

  return <SpinnerComponent children={LineGraph} isDataLoaded={isLoaded} />;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(NivoLineComponent);
