import React, { useEffect, useState } from 'react';
import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import SpinnerComponent from '../SpinnerComponent';
import { bubbleDataGetter } from '../../lib/DataFetcher';
import { connect } from 'react-redux';
import { accessAll } from '../../lib/ReduceAccessor';
import { RootState } from '../../types';

interface NivoBubbleComponentProps {
  months: string;
  person: string;
  validity: string;
  sellType: string;
  color: string;
}

const NivoBubbleComponent: React.FC<NivoBubbleComponentProps> = ({
  months,
  person,
  validity,
  sellType,
  color,
}) => {
  const [data, setData] = useState<any>({});
  const [isLoaded, changeLoadedState] = useState(false);

  const finaliseTransaction = (result: any) => {
    setData(result);
    changeLoadedState(true);
  };

  useEffect(() => {
    bubbleDataGetter([months, person, validity, sellType, color], finaliseTransaction);
  }, [months, person, validity, sellType, color]);

  const bubbleGraph = (
    <ResponsiveCirclePacking
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      id="name"
      value="value"
      colors={{ scheme: color as any }}
      padding={6}
      labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
      borderWidth={2}
      borderColor={{ from: 'color' }}
      animate={true}
    />
  );

  return <SpinnerComponent isDataLoaded={isLoaded} children={bubbleGraph} />;
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(NivoBubbleComponent);
