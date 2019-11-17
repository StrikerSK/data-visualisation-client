import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import StackedGraphComponent from "./components/StackedGraphComponent";
import PieChartYearly from "./components/PieChartYearly";
import NivoStreamComponent from "./components/nivo/NivoStreamComponent";
import NivoWaffleComponent from "./components/nivo/NivoWaffleComponent";
import NivoRadarComponent from "./components/nivo/NivoRadarComponent";
import NivoBarContainer from "./components/Container/NivoBarContainer";
import NivoLineContainer from "./components/Container/NivoLineContainer";
import NivoHeatMapContainer from "./components/Container/NivoHeatMapContainer";
import NivoPieContainer from "./components/Container/NivoPieContainer";
import NivoBubbleContainer from "./components/Container/NivoBubbleContainer";
import AreaChartComponent from "./components/Recharts/AreaChartComponent";
import BarChartComponent from "./components/Recharts/BarChartComponent";
import LineGraphComponent from "./components/Recharts/LineGraphComponent";
import PieChartMonthly from "./components/Recharts/PieChartMonthly";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact strict path="/" render={() => <NivoBarContainer/>}/>
					<Route exact strict path="/line" render={() => <LineGraphComponent/>}/>
					<Route exact strict path="/area" render={() => <AreaChartComponent/>}/>
					<Route exact strict path="/bar" render={() => <BarChartComponent/>}/>
					<Route exact strict path="/stacked" render={() => <StackedGraphComponent/>}/>
					<Route exact strict path="/pie" render={() => <PieChartYearly/>}/>
					<Route exact strict path="/pie/collection" render={() => <PieChartMonthly/>}/>
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
