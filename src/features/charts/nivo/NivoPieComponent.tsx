import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { isDesktop } from '../../../shared/utils/Functions';

interface NivoPieComponentProps {
  data: any[];
  color: string;
}

const NivoPieComponent: React.FC<NivoPieComponentProps> = ({ data, color }) => {
  return (
    <ResponsivePie
      data={data || []}
      margin={{ top: 20, right: 40, bottom: 70, left: 40 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: color as any }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      enableArcLinkLabels={isDesktop()}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#333333"
      animate={true}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default NivoPieComponent;
