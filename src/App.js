import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import LineGraphComponent from "./components/LineGraphComponent";
import StackedGraphComponent from "./components/StackedGraphComponent";
import PieChartYearly from "./components/PieChartYearly";
import PieChartMonthly from "./components/PieChartMonthly";
import StreamComponent from "./components/nivo/StreamComponent";
import WaffleComponent from "./components/nivo/WaffleComponent";
import RadarComponent from "./components/nivo/RadarComponent";
import NivoBarContainer from "./components/Container/NivoBarContainer";
import NivoLineContainer from "./components/Container/NivoLineContainer";
import NivoHeatMapContainer from "./components/Container/NivoHeatMapContainer";
import NivoPieContainer from "./components/Container/NivoPieContainer";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact strict path="/" render={() => <NivoBarContainer/>}/>
					<Route exact strict path="/line" render={() => <LineGraphComponent/>}/>
					<Route exact strict path="/stacked" render={() => <StackedGraphComponent/>}/>
					<Route exact strict path="/pie" render={() => <PieChartYearly/>}/>
					<Route exact strict path="/pie/collection" render={() => <PieChartMonthly/>}/>
					<Route exact strict path="/nivo/line" render={() => <NivoLineContainer/>}/>
					<Route exact strict path="/nivo/bar" render={() => <NivoBarContainer/>}/>
					<Route exact strict path="/nivo/stack" render={() => <StreamComponent/>}/>
					<Route exact strict path="/nivo/pie" render={() => <NivoPieContainer/>}/>
					<Route exact strict path="/nivo/waffle" render={() => <WaffleComponent/>}/>
					<Route exact strict path="/nivo/heatmap" render={() => <NivoHeatMapContainer/>}/>
					<Route exact strict path="/nivo/radar" render={() => <RadarComponent/>}/>
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
