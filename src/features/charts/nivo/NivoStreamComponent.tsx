import React from 'react';
import { ResponsiveStream } from '@nivo/stream';
import { dataKeys } from '../../filters/components/CheckboxPerson';

interface NivoStreamComponentProps {
  data: any[];
}

const NivoStreamComponent: React.FC<NivoStreamComponentProps> = ({ data }) => {
  return (
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
};

export default NivoStreamComponent;
