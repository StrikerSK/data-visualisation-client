import React from 'react';
import { ResponsiveStream } from '@nivo/stream';
import SpinnerComponent from '../SpinnerComponent';
import { dataKeys } from '../controlls/checkboxes/CheckboxPerson';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';
import { useStreamData } from '../../lib/hooks/useChartsData';

interface NivoStreamComponentProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
  color: string;
}

const NivoStreamComponent: React.FC<NivoStreamComponentProps> = ({
  months,
  person,
  validity,
  sellType,
  color,
}) => {
  const { data, isLoading } = useStreamData([months, person, validity, sellType, color]);

  const streamGraph = (
    <ResponsiveStream
      data={data || []}
      keys={dataKeys}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: -40,
      }}
      offsetType="expand"
      colors={{ scheme: 'nivo' }}
      fillOpacity={0.85}
      curve="basis"
      borderColor={{ theme: 'background' }}
      dotSize={8}
      dotColor={{ from: 'color' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
      animate={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
              },
            },
          ],
        },
      ]}
    />
  );

  return <SpinnerComponent isDataLoaded={!isLoading}>{streamGraph}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(NivoStreamComponent);
