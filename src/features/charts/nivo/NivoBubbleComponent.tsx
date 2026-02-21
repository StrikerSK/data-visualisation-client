import React from 'react';
import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import SpinnerComponent from '../../../shared/components/SpinnerComponent';
import { connect } from 'react-redux';
import { accessAll } from '../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../shared/types';
import { useBubbleData } from '../../../shared/hooks/useChartsData';

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
  const { data, isPending, isError } = useBubbleData([months, person, validity, sellType, color]);

  const bubbleGraph = (
    <ResponsiveCirclePacking
      data={data || { name: 'root', children: [] }}
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

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      {bubbleGraph}
    </SpinnerComponent>
  );
};

const mapStateToProps = (state: RootState) => accessAll(state);

export default connect(mapStateToProps)(NivoBubbleComponent);
