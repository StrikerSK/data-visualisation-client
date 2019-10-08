import React, {Component} from 'react';
import './App.css';

import LineGraphComponent from "./components/LineGraphComponent";
import StackedGraphComponent from "./components/StackedGraphComponent";
import PieChartYearly from "./components/PieChartYearly";
import PieChartMonthly from "./components/PieChartMonthly";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BarComponent from "./components/nivo/BarComponent";
import StreamComponent from "./components/nivo/StreamComponent";
import LineComponent from "./components/nivo/LineComponent";
import PieComponent from "./components/nivo/PieComponent";
import WaffleComponent from "./components/nivo/WaffleComponent";


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact strict path="/line" render={() => <LineGraphComponent/>}/>
					<Route exact strict path="/stacked" render={() => <StackedGraphComponent/>}/>
					<Route exact strict path="/pie" render={() => <PieChartYearly/>}/>
					<Route exact strict path="/pie/collection" render={() => <PieChartMonthly/>}/>
					<Route exact strict path="/nivo/line" render={() => <LineComponent/>}/>
					<Route exact strict path="/nivo/bar" render={() => <BarComponent/>}/>
					<Route exact strict path="/nivo/stack" render={() => <StreamComponent/>}/>
					<Route exact strict path="/nivo/pie" render={() => <PieComponent/>}/>
					<Route exact strict path="/nivo/waffle" render={() => <WaffleComponent/>}/>
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
