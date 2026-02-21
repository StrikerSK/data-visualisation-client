import React, { ReactNode } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import BarChartComponent from '../../../charts/recharts/BarChartComponent';
import LineGraphComponent from '../../../charts/recharts/LineGraphComponent';
import StackedGraphComponent from '../../../charts/recharts/StackedGraphComponent';
import AreaChartComponent from '../../../charts/recharts/AreaChartComponent';
import PieChartYearly from '../../../charts/recharts/PieChartYearly';
import { useSelector } from 'react-redux';
import { accessAll } from '../../../../shared/utils/ReduceAccessor';
import { RootState } from '../../../../shared/types';
import { useBarData, nivoBarPath } from '../../../../shared/hooks/useChartsData';
import SpinnerComponent from '../../../../shared/components/SpinnerComponent';

export const RechartsDashboard: React.FC = () => {
  const { months, person, validity, sellType } = useSelector((state: RootState) => accessAll(state));
  const { isPending, data, isError } = useBarData(nivoBarPath, {
    month: months,
    person,
    validity,
    type: sellType,
  });

  const componentsArray: ReactNode[] = [
    <BarChartComponent key="bar" data={data || []} />,
    <LineGraphComponent key="line" data={data || []} />,
    <StackedGraphComponent key="stacked" data={data || []} />,
    <AreaChartComponent key="area" data={data || []} />,
    <PieChartYearly key="pie" data={data || []} />,
  ];

  // DashboardLayout expects exactly 4 children in its type definition
  const displayComponents = componentsArray.slice(0, 4) as [ReactNode, ReactNode, ReactNode, ReactNode];

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      <DashboardLayout>{displayComponents}</DashboardLayout>
    </SpinnerComponent>
  );
};

export const RechartsDashboardRandom: React.FC = () => {
  const { months, person, validity, sellType } = useSelector((state: RootState) => accessAll(state));
  const { isPending, data, isError } = useBarData(nivoBarPath, {
    month: months,
    person,
    validity,
    type: sellType,
  });

  const componentsArray: ReactNode[] = [
    <BarChartComponent key="bar" data={data || []} />,
    <LineGraphComponent key="line" data={data || []} />,
    <StackedGraphComponent key="stacked" data={data || []} />,
    <AreaChartComponent key="area" data={data || []} />,
    <PieChartYearly key="pie" data={data || []} />,
  ];

  const shuffled = [...componentsArray].sort(() => Math.random() - 0.5);
  const displayComponents = shuffled.slice(0, 4) as [ReactNode, ReactNode, ReactNode, ReactNode];

  return (
    <SpinnerComponent isDataLoaded={!isPending && !isError && !!data}>
      <DashboardLayout>{displayComponents}</DashboardLayout>
    </SpinnerComponent>
  );
};
