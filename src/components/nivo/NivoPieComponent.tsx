import React, { useState, useEffect } from 'react';
import { ResponsivePie } from '@nivo/pie';
import SpinnerComponent from '../SpinnerComponent';
import { fetchBarData, nivoPiePath } from '../../lib/DataFetcher';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { isDesktop } from '../../lib/Functions';
import { RootState } from '../../types';

interface NivoPieComponentProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
  color: string;
}

const NivoPieComponent: React.FC<NivoPieComponentProps> = ({
  months,
  person,
  validity,
  sellType,
  color,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoaded, changeLoadedState] = useState(false);

  useEffect(() => {
    fetchBarData(nivoPiePath, [months, person, validity, sellType])
      .then(({ data }) => setData(data))
      .then(() => changeLoadedState(true))
      .catch(console.error);
  }, [months, person, validity, sellType, color]);

  const pieChart = (
    <ResponsivePie
      data={data}
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

  return <SpinnerComponent isDataLoaded={isLoaded}>{pieChart}</SpinnerComponent>;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(NivoPieComponent);
