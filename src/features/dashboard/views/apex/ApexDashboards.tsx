import React, { ReactNode } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import ApexBarChart from '../../../charts/apex/ApexBarChart';
import ApexLineChart from '../../../charts/apex/ApexLineChart';
import ApexRadialChart from '../../../charts/apex/ApexRadialChart';
import ApexPieChart from '../../../charts/apex/ApexPieChart';
import ApexHeatmapChart from '../../../charts/apex/ApexHeatmapChart';
import ApexAreaChart from '../../../charts/apex/ApexAreaChart';
import ApexRadarChart from '../../../charts/apex/ApexRadarChart';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';
import { useApexData } from '../../../../shared/hooks/useChartsData';
import SpinnerComponent from '../../../../shared/components/SpinnerComponent';

export const ApexDashboards: React.FC = () => {
  const { months, person, validity, sellType, barLayout, barGrouping } = useSelector(
    (state: RootState) => accessAll(state)
  );
  const { isPending, data, isError } = useApexData({
    month: months,
    person,
    validity,
    type: sellType,
  });

  const componentArray: ReactNode[] = [
    <ApexBarChart
      key="bar"
      data={data || []}
      barLayout={barLayout}
      barGrouping={barGrouping}
    />,
    <ApexLineChart key="line" data={data || []} />,
    <ApexRadialChart key="radial" data={data || []} />,
    <ApexPieChart key="pie" data={data || []} />,
    <ApexHeatmapChart key="heatmap" data={data || []} />,
    <ApexAreaChart key="area" data={data || []} />,
    <ApexRadarChart key="radar" data={data || []} />,
  ];

  const displayComponents = componentArray.slice(0, 4) as [ReactNode, ReactNode, ReactNode, ReactNode];

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      <DashboardLayout>{displayComponents}</DashboardLayout>
    </SpinnerComponent>
  );
};

export const ApexDashboardsRandom: React.FC = () => {
  const { months, person, validity, sellType, barLayout, barGrouping } = useSelector(
    (state: RootState) => accessAll(state)
  );
  const { isPending, data, isError } = useApexData({
    month: months,
    person,
    validity,
    type: sellType,
  });

  const componentArray: ReactNode[] = [
    <ApexBarChart
      key="bar"
      data={data || []}
      barLayout={barLayout}
      barGrouping={barGrouping}
    />,
    <ApexLineChart key="line" data={data || []} />,
    <ApexRadialChart key="radial" data={data || []} />,
    <ApexPieChart key="pie" data={data || []} />,
    <ApexHeatmapChart key="heatmap" data={data || []} />,
    <ApexAreaChart key="area" data={data || []} />,
    <ApexRadarChart key="radar" data={data || []} />,
  ];

  const shuffled = [...componentArray].sort(() => Math.random() - 0.5);
  const displayComponents = shuffled.slice(0, 4) as [ReactNode, ReactNode, ReactNode, ReactNode];

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      <DashboardLayout>{displayComponents}</DashboardLayout>
    </SpinnerComponent>
  );
};
