import React, { ReactNode } from 'react';
import NivoPieComponent from '../../../charts/nivo/NivoPieComponent';
import NivoBarComponent from '../../../charts/nivo/NivoBarComponent';
import NivoLineComponent from '../../../charts/nivo/NivoLineComponent';
import NivoBubbleComponent from '../../../charts/nivo/NivoBubbleComponent';
import DashboardLayout from '../../components/DashboardLayout';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';
import { useLineData } from '../../../../shared/hooks/useChartsData';
import SpinnerComponent from '../../../../shared/components/SpinnerComponent';

export const NivoDashboards: React.FC = () => {
  const { months, person, validity, sellType, barGrouping, barLayout, color } = useSelector(
    (state: RootState) => accessAll(state)
  );
  const { isPending, data, isError } = useLineData({
    month: months,
    person,
    validity,
    type: sellType,
  });

  const componentArray: ReactNode[] = [
    <NivoLineComponent key="line" data={data || []} color={color} />,
    <NivoBarComponent
      key="bar"
      data={data || []}
      barGrouping={barGrouping}
      barLayout={barLayout}
      color={color}
    />,
    <NivoPieComponent key="pie" data={data || []} color={color} />,
    <NivoBubbleComponent key="bubble" data={data || []} color={color} />,
  ];

  const displayComponents = componentArray as [ReactNode, ReactNode, ReactNode, ReactNode];

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      <DashboardLayout>{displayComponents}</DashboardLayout>
    </SpinnerComponent>
  );
};

export const NivoDashboardsRandom: React.FC = () => {
  const { months, person, validity, sellType, barGrouping, barLayout, color } = useSelector(
    (state: RootState) => accessAll(state)
  );
  const { isPending, data, isError } = useLineData({
    month: months,
    person,
    validity,
    type: sellType,
  });

  const componentArray: ReactNode[] = [
    <NivoLineComponent key="line" data={data || []} color={color} />,
    <NivoBarComponent
      key="bar"
      data={data || []}
      barGrouping={barGrouping}
      barLayout={barLayout}
      color={color}
    />,
    <NivoPieComponent key="pie" data={data || []} color={color} />,
    <NivoBubbleComponent key="bubble" data={data || []} color={color} />,
  ];

  const shuffled = [...componentArray].sort(() => Math.random() - 0.5);
  const displayComponents = shuffled as [ReactNode, ReactNode, ReactNode, ReactNode];

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      <DashboardLayout>{displayComponents}</DashboardLayout>
    </SpinnerComponent>
  );
};
