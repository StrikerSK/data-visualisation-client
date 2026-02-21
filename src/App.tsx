import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/styles.scss';

import MainPage from './features/dashboard/views/MainPage';

import NivoBarContainer from './features/dashboard/views/nivo/NivoBarContainer';
import NivoLineContainer from './features/dashboard/views/nivo/NivoLineContainer';
import NivoPieContainer from './features/dashboard/views/nivo/NivoPieContainer';
import NivoBubbleContainer from './features/dashboard/views/nivo/NivoBubbleContainer';
import NivoStreamContainer from './features/dashboard/views/nivo/NivoStreamContainer';
import {
  NivoDashboards,
  NivoDashboardsRandom,
} from './features/dashboard/views/nivo/NivoDashboards';

import ApexPieChart from './features/dashboard/views/apex/ApexPieChart';
import ApexBarChart from './features/dashboard/views/apex/ApexBarChart';
import ApexLineChart from './features/dashboard/views/apex/ApexLineChart';
import ApexRadialChart from './features/dashboard/views/apex/ApexRadialChart';
import ApexHeatmapChart from './features/dashboard/views/apex/ApexHeatmapChart';
import ApexRadarChart from './features/dashboard/views/apex/ApexRadarChart';
import ApexAreaChart from './features/dashboard/views/apex/ApexAreaChart';
import {
  ApexDashboards,
  ApexDashboardsRandom,
} from './features/dashboard/views/apex/ApexDashboards';

import RechartsPieContainer from './features/dashboard/views/recharts/RechartsPieContainer';
import RechartsStackedContainer from './features/dashboard/views/recharts/RechartsStackedContainer';
import RechartsLineContainer from './features/dashboard/views/recharts/RechartsLineContainer';
import RechartsBarContainer from './features/dashboard/views/recharts/RechartsBarContainer';
import RechartsAreaContainer from './features/dashboard/views/recharts/RechartsAreaContainer';
import {
  RechartsDashboard,
  RechartsDashboardRandom,
} from './features/dashboard/views/recharts/RechartsDashboard';

interface PathRoute {
  path: string;
  component: React.ReactElement;
}

const App: React.FC = () => {
  const pathList: PathRoute[] = [
    { path: '/', component: <MainPage /> },
    { path: '/recharts', component: <RechartsDashboard /> },
    { path: '/recharts/random', component: <RechartsDashboardRandom /> },
    { path: '/recharts/line', component: <RechartsLineContainer /> },
    { path: '/recharts/area', component: <RechartsAreaContainer /> },
    { path: '/recharts/bar', component: <RechartsBarContainer /> },
    { path: '/recharts/stacked', component: <RechartsStackedContainer /> },
    { path: '/recharts/pie', component: <RechartsPieContainer /> },
    { path: '/nivo', component: <NivoDashboards /> },
    { path: '/nivo/random', component: <NivoDashboardsRandom /> },
    { path: '/nivo/line', component: <NivoLineContainer /> },
    { path: '/nivo/bar', component: <NivoBarContainer /> },
    { path: '/nivo/stack', component: <NivoStreamContainer /> },
    { path: '/nivo/pie', component: <NivoPieContainer /> },
    { path: '/nivo/bubble', component: <NivoBubbleContainer /> },
    { path: '/apex', component: <ApexDashboards /> },
    { path: '/apex/random', component: <ApexDashboardsRandom /> },
    { path: '/apex/area', component: <ApexAreaChart /> },
    { path: '/apex/pie', component: <ApexPieChart /> },
    { path: '/apex/heatmap', component: <ApexHeatmapChart /> },
    { path: '/apex/radar', component: <ApexRadarChart /> },
    { path: '/apex/line', component: <ApexLineChart /> },
    { path: '/apex/bar', component: <ApexBarChart /> },
    { path: '/apex/radial', component: <ApexRadialChart /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {pathList.map(({ path, component }, index) => {
          return <Route key={index} path={path} element={component} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
