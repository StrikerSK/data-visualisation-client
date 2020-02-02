import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {GlobalStyles} from "./components/StyledComponents";
import NivoBarContainer from "./container/NivoBarContainer";
import NivoLineContainer from "./container/NivoLineContainer";
import NivoPieContainer from "./container/NivoPieContainer";
import NivoBubbleContainer from "./container/NivoBubbleContainer";
import PieChartMonthly from "./components/recharts/PieChartMonthly";
import {NivoDashboards, NivoDashboardsRandom} from "./container/NivoDashboards";
import {RechartsDashboard, RechartsDashboardRandom} from "./container/RechartsDashboard";

import {
	RechartsAreaContainer,
	RechartsBarContainer,
	RechartsLineContainer,
	RechartsPieContainer,
	RechartsStackedContainer
} from "./container/RechartsContainers";

import {
	NivoHeatMapContainer,
	NivoRadarContainer,
	NivoStreamContainer,
	NivoWaffleContainer
} from "./container/NivoGraphCollection";
import MainPage from "./container/MainPage";

import {
	ApexAreaContainer,
	ApexBarContainer,
	ApexChartContainers,
	ApexHeatmapContainer,
	ApexLineContainer,
	ApexRadarContainer,
	ApexRadialContainer
} from "./container/ApexchartsContainers";
import {ApexDashboards, ApexDashboardsRandom} from "./container/ApexDashboards";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<GlobalStyles/>
				<Switch>
					<Route exact strict path="/" render={() => <MainPage/>}/>
					<Route exact strict path="/recharts" render={() => <RechartsDashboard/>}/>
					<Route exact strict path="/recharts/random" render={() => <RechartsDashboardRandom/>}/>
					<Route exact strict path="/recharts/line" render={() => <RechartsLineContainer/>}/>
					<Route exact strict path="/recharts/area" render={() => <RechartsAreaContainer/>}/>
					<Route exact strict path="/recharts/bar" render={() => <RechartsBarContainer/>}/>
					<Route exact strict path="/recharts/stacked" render={() => <RechartsStackedContainer/>}/>
					<Route exact strict path="/recharts/pie" render={() => <RechartsPieContainer/>}/>
					<Route exact strict path="/recharts/pie/collection" render={() => <PieChartMonthly/>}/>
					<Route exact strict path="/nivo" render={() => <NivoDashboards/>}/>
					<Route exact strict path="/nivo/random" render={() => <NivoDashboardsRandom/>}/>
					<Route exact strict path="/nivo/line" render={() => <NivoLineContainer/>}/>
					<Route exact strict path="/nivo/bar" render={() => <NivoBarContainer/>}/>
					<Route exact strict path="/nivo/stack" render={() => <NivoStreamContainer/>}/>
					<Route exact strict path="/nivo/pie" render={() => <NivoPieContainer/>}/>
					<Route exact strict path="/nivo/waffle" render={() => <NivoWaffleContainer/>}/>
					<Route exact strict path="/nivo/heatmap" render={() => <NivoHeatMapContainer/>}/>
					<Route exact strict path="/nivo/radar" render={() => <NivoRadarContainer/>}/>
					<Route exact strict path="/nivo/bubble" render={() => <NivoBubbleContainer/>}/>
					<Route exact strict path="/apex" render={() => <ApexDashboards/>}/>
					<Route exact strict path="/apex/random" render={() => <ApexDashboardsRandom/>}/>
					<Route exact strict path="/apex/area" render={() => <ApexAreaContainer/>}/>
					<Route exact strict path="/apex/area" render={() => <ApexAreaContainer/>}/>
					<Route exact strict path="/apex/pie" render={() => <ApexChartContainers/>}/>
					<Route exact strict path="/apex/heatmap" render={() => <ApexHeatmapContainer/>}/>
					<Route exact strict path="/apex/radar" render={() => <ApexRadarContainer/>}/>
					<Route exact strict path="/apex/line" render={() => <ApexLineContainer/>}/>
					<Route exact strict path="/apex/bar" render={() => <ApexBarContainer/>}/>
					<Route exact strict path="/apex/radial" render={() => <ApexRadialContainer/>}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
