import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {GlobalStyles} from "./components/StyledComponents";
import NivoBarContainer from "./container/NivoBarContainer";
import NivoLineContainer from "./container/NivoLineContainer";
import NivoPieContainer from "./container/NivoPieContainer";
import NivoBubbleContainer from "./container/NivoBubbleContainer";
import PieChartMonthly from "./components/recharts/PieChartMonthly";
import {DashboardContainer, DashboardContainerRandom} from "./container/DashboardContainer";
import {RechartsDashboard, RechartsDashboardRandom} from "./container/RechartsDashboard";

import {
	RechartsAreaContainer,
	RechartsBarContainer,
	RechartsLineContainer,
	RechartsPieContainer,
	RechartsStackedContainer
} from "./container/RechartsGraphCollection";

import {
	NivoHeatMapContainer,
	NivoRadarContainer,
	NivoStreamContainer,
	NivoWaffleContainer
} from "./container/NivoGraphCollection";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<GlobalStyles/>
				<Switch>
					<Route exact strict path="/" render={() => <DashboardContainer/>}/>
					<Route exact strict path="/recharts" render={() => <RechartsDashboard/>}/>
					<Route exact strict path="/recharts/random" render={() => <RechartsDashboardRandom/>}/>
					<Route exact strict path="/recharts/line" render={() => <RechartsLineContainer/>}/>
					<Route exact strict path="/recharts/area" render={() => <RechartsAreaContainer/>}/>
					<Route exact strict path="/recharts/bar" render={() => <RechartsBarContainer/>}/>
					<Route exact strict path="/recharts/stacked" render={() => <RechartsStackedContainer/>}/>
					<Route exact strict path="/recharts/pie" render={() => <RechartsPieContainer/>}/>
					<Route exact strict path="/recharts/pie/collection" render={() => <PieChartMonthly/>}/>
					<Route exact strict path="/nivo" render={() => <DashboardContainer/>}/>
					<Route exact strict path="/nivo/random" render={() => <DashboardContainerRandom/>}/>
					<Route exact strict path="/nivo/line" render={() => <NivoLineContainer/>}/>
					<Route exact strict path="/nivo/bar" render={() => <NivoBarContainer/>}/>
					<Route exact strict path="/nivo/stack" render={() => <NivoStreamContainer/>}/>
					<Route exact strict path="/nivo/pie" render={() => <NivoPieContainer/>}/>
					<Route exact strict path="/nivo/waffle" render={() => <NivoWaffleContainer/>}/>
					<Route exact strict path="/nivo/heatmap" render={() => <NivoHeatMapContainer/>}/>
					<Route exact strict path="/nivo/radar" render={() => <NivoRadarContainer/>}/>
					<Route exact strict path="/nivo/bubble" render={() => <NivoBubbleContainer/>}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
