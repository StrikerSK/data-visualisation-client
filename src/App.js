import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import StackedGraphComponent from "./components/recharts/StackedGraphComponent";
import PieChartYearly from "./components/recharts/PieChartYearly";
import NivoStreamComponent from "./components/nivo/NivoStreamComponent";
import NivoWaffleComponent from "./components/nivo/NivoWaffleComponent";
import NivoRadarComponent from "./components/nivo/NivoRadarComponent";
import NivoBarContainer from "./container/NivoBarContainer";
import NivoLineContainer from "./container/NivoLineContainer";
import NivoHeatMapContainer from "./container/NivoHeatMapContainer";
import NivoPieContainer from "./container/NivoPieContainer";
import NivoBubbleContainer from "./container/NivoBubbleContainer";
import AreaChartComponent from "./components/recharts/AreaChartComponent";
import BarChartComponent from "./components/recharts/BarChartComponent";
import LineGraphComponent from "./components/recharts/LineGraphComponent";
import PieChartMonthly from "./components/recharts/PieChartMonthly";
import {GlobalStyles} from "./components/StyledComponents";
import DashboardContainer from "./container/DashboardContainer";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<GlobalStyles/>
				<Switch>
					<Route exact strict path="/" render={() => <DashboardContainer/>}/>
					<Route exact strict path="/recharts/line" render={() => <LineGraphComponent/>}/>
					<Route exact strict path="/recharts/area" render={() => <AreaChartComponent/>}/>
					<Route exact strict path="/recharts/bar" render={() => <BarChartComponent/>}/>
					<Route exact strict path="/recharts/stacked" render={() => <StackedGraphComponent/>}/>
					<Route exact strict path="/recharts/pie" render={() => <PieChartYearly/>}/>
					<Route exact strict path="/recharts/pie/collection" render={() => <PieChartMonthly/>}/>
					<Route exact strict path="/nivo/line" render={() => <NivoLineContainer/>}/>
					<Route exact strict path="/nivo/bar" render={() => <NivoBarContainer/>}/>
					<Route exact strict path="/nivo/stack" render={() => <NivoStreamComponent/>}/>
					<Route exact strict path="/nivo/pie" render={() => <NivoPieContainer/>}/>
					<Route exact strict path="/nivo/waffle" render={() => <NivoWaffleComponent/>}/>
					<Route exact strict path="/nivo/heatmap" render={() => <NivoHeatMapContainer/>}/>
					<Route exact strict path="/nivo/radar" render={() => <NivoRadarComponent/>}/>
					<Route exact strict path="/nivo/bubble" render={() => <NivoBubbleContainer/>}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
