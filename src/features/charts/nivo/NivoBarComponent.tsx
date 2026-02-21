import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { adaptToWidth, isDesktop } from '../../../shared/utils/Functions';

interface NivoBarComponentProps {
  data: any[];
  barGrouping: 'stacked' | 'grouped';
  barLayout: 'vertical' | 'horizontal';
  color: string;
}

const NivoBarComponent: React.FC<NivoBarComponentProps> = ({
  data,
  barGrouping,
  barLayout,
  color,
}) => {
  const getLabels = (input: any[]) => {
    if (!Array.isArray(input) || input.length === 0) return [];
    return Object.keys(input[0])
      .filter((key) => key !== 'label')
      .reverse();
  };

  const labels = data ? getLabels(data) : [];

  return (
    <ResponsiveBar
      data={data || []}
      keys={labels}
      indexBy="label"
      margin={adaptToWidth(
        { top: 10, right: 10, bottom: 70, left: 80 },
        { top: 10, right: 5, bottom: 80, left: 70 }
      )}
      padding={0.3}
      groupMode={barGrouping}
      layout={barLayout}
      colors={{ scheme: color as any }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: adaptToWidth(0, -25),
        legendPosition: 'middle',
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Predaj lístkov',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      enableLabel={isDesktop()}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: -40,
          translateY: 50,
          itemWidth: 75,
          itemHeight: 15,
          itemDirection: 'top-to-bottom',
          symbolSize: 12,
          symbolShape: 'circle',
        },
      ]}
      animate={true}
    />
  );
};

export default NivoBarComponent;
