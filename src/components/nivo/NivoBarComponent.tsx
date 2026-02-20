import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import SpinnerComponent from '../SpinnerComponent';
import { fetchBarData, nivoBarPath } from '../../lib/DataFetcher';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { adaptToWidth, isDesktop } from '../../lib/Functions';
import { RootState } from '../../types';

interface NivoBarComponentProps {
  barGrouping: 'stacked' | 'grouped';
  barLayout: 'vertical' | 'horizontal';
  months: string;
  person: string;
  validity: string;
  sellType: string;
  color: string;
}

const NivoBarComponent: React.FC<NivoBarComponentProps> = ({
  barGrouping,
  barLayout,
  months,
  person,
  validity,
  sellType,
  color,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

  const processData = (data: any[]) => {
    const getLabels = (input: any[]) => {
      if (!Array.isArray(input) || input.length === 0) return [];
      return Object.keys(input[0])
        .filter((key) => key !== 'label')
        .reverse();
    };

    setData(data);
    setLabels(getLabels(data));
  };

  useEffect(() => {
    fetchBarData(nivoBarPath, [person, months, sellType, validity])
      .then(({ data }) => processData(data))
      .then(() => changeLoadedState(true))
      .catch(console.error);
  }, [person, months, sellType, validity]);

  const barGraph = (
    <ResponsiveBar
      data={data}
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

  return <SpinnerComponent isDataLoaded={isLoaded} children={barGraph} />;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(NivoBarComponent);
