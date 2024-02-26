import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './styles/styles.scss';

import MainPage from "./container/MainPage";

import NivoBarContainer from "./container/nivo/NivoBarContainer";
import NivoLineContainer from "./container/nivo/NivoLineContainer";
import NivoPieContainer from "./container/nivo/NivoPieContainer";
import NivoBubbleContainer from "./container/nivo/NivoBubbleContainer";
import NivoStreamContainer from "./container/nivo/NivoStreamContainer";
import {NivoDashboards, NivoDashboardsRandom} from "./container/nivo/NivoDashboards";

import ApexPieChart from "./container/apex/ApexPieChart";
import ApexBarChart from "./container/apex/ApexBarChart";
import ApexLineChart from "./container/apex/ApexLineChart";
import ApexRadialChart from "./container/apex/ApexRadialChart";
import ApexHeatmapChart from "./container/apex/ApexHeatmapChart";
import ApexRadarChart from "./container/apex/ApexRadarChart";
import ApexAreaChart from "./container/apex/ApexAreaChart";
import {ApexDashboards, ApexDashboardsRandom} from "./container/apex/ApexDashboards";

import RechartsPieContainer from "./container/recharts/RechartsPieContainer";
import RechartsStackedContainer from "./container/recharts/RechartsStackedContainer";
import RechartsLineContainer from "./container/recharts/RechartsLineContainer";
import RechartsBarContainer from "./container/recharts/RechartsBarContainer";
import RechartsAreaContainer from "./container/recharts/RechartsAreaContainer";
import {RechartsDashboard, RechartsDashboardRandom} from "./container/recharts/RechartsDashboard";

const App = () => {
    const pathList = [
        {path: "/", component: <MainPage/>},
        {path: "/recharts", component: <RechartsDashboard/>},
        {path: "/recharts/random", component: <RechartsDashboardRandom/>},
        {path: "/recharts/line", component: <RechartsLineContainer/>},
        {path: "/recharts/area", component: <RechartsAreaContainer/>},
        {path: "/recharts/bar", component: <RechartsBarContainer/>},
        {path: "/recharts/stacked", component: <RechartsStackedContainer/>},
        {path: "/recharts/pie", component: <RechartsPieContainer/>},
        {path: "/nivo", component: <NivoDashboards/>},
        {path: "/nivo/random", component: <NivoDashboardsRandom/>},
        {path: "/nivo/line", component: <NivoLineContainer/>},
        {path: "/nivo/bar", component: <NivoBarContainer/>},
        {path: "/nivo/stack", component: <NivoStreamContainer/>},
        {path: "/nivo/pie", component: <NivoPieContainer/>},
        {path: "/nivo/bubble", component: <NivoBubbleContainer/>},
        {path: "/apex", component: <ApexDashboards/>},
        {path: "/apex/random", component: <ApexDashboardsRandom/>},
        {path: "/apex/area", component: <ApexAreaChart/>},
        {path: "/apex/pie", component: <ApexPieChart/>},
        {path: "/apex/heatmap", component: <ApexHeatmapChart/>},
        {path: "/apex/radar", component: <ApexRadarChart/>},
        {path: "/apex/line", component: <ApexLineChart/>},
        {path: "/apex/bar", component: <ApexBarChart/>},
        {path: "/apex/radial", component: <ApexRadialChart/>}
    ]

    return (
        <BrowserRouter>
            <Switch>
                {pathList.map(({path, component}, index) => {
                    return <Route key={index} exact strict path={path} render={() => component}/>
                })}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
