import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import NivoBarContainer from "./container/nivo/NivoBarContainer";
import NivoLineContainer from "./container/nivo/NivoLineContainer";
import NivoPieContainer from "./container/nivo/NivoPieContainer";
import NivoBubbleContainer from "./container/nivo/NivoBubbleContainer";
import PieChartMonthly from "./components/recharts/PieChartMonthly";
import {NivoDashboards, NivoDashboardsRandom} from "./container/nivo/NivoDashboards";
import {RechartsDashboard, RechartsDashboardRandom} from "./container/recharts/RechartsDashboard";

import {
    RechartsAreaContainer,
    RechartsBarContainer,
    RechartsLineContainer,
    RechartsPieContainer,
    RechartsStackedContainer
} from "./container/recharts/RechartsContainers";

import {
    NivoHeatMapContainer,
    NivoRadarContainer,
    NivoStreamContainer,
} from "./container/nivo/NivoGraphCollection";
import MainPage from "./container/MainPage";

import {
    ApexAreaContainer,
    ApexBarContainer,
    ApexChartContainers,
    ApexHeatmapContainer,
    ApexLineContainer,
    ApexRadarContainer,
    ApexRadialContainer
} from "./container/apex/ApexchartsContainers";
import {ApexDashboards, ApexDashboardsRandom} from "./container/apex/ApexDashboards";
import NivoWaffleChartContainer from "./container/nivo/NivoWaffleChartContainer";

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
        {path: "/recharts/pie/collection", component: <PieChartMonthly/>},
        {path: "/nivo", component: <NivoDashboards/>},
        {path: "/nivo/random", component: <NivoDashboardsRandom/>},
        {path: "/nivo/line", component: <NivoLineContainer/>},
        {path: "/nivo/bar", component: <NivoBarContainer/>},
        {path: "/nivo/stack", component: <NivoStreamContainer/>},
        {path: "/nivo/pie", component: <NivoPieContainer/>},
        {path: "/nivo/waffle", component: <NivoWaffleChartContainer/>},
        {path: "/nivo/heatmap", component: <NivoHeatMapContainer/>},
        {path: "/nivo/radar", component: <NivoRadarContainer/>},
        {path: "/nivo/bubble", component: <NivoBubbleContainer/>},
        {path: "/apex", component: <ApexDashboards/>},
        {path: "/apex/random", component: <ApexDashboardsRandom/>},
        {path: "/apex/area", component: <ApexAreaContainer/>},
        {path: "/apex/area", component: <ApexAreaContainer/>},
        {path: "/apex/pie", component: <ApexChartContainers/>},
        {path: "/apex/heatmap", component: <ApexHeatmapContainer/>},
        {path: "/apex/radar", component: <ApexRadarContainer/>},
        {path: "/apex/line", component: <ApexLineContainer/>},
        {path: "/apex/bar", component: <ApexBarContainer/>},
        {path: "/apex/radial", component: <ApexRadialContainer/>}
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
