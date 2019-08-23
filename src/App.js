import React, {Component} from 'react';
import './App.css';

import LineGraphComponent from "./components/LineGraphComponent";
import StackedGraphComponent from "./components/StackedGraphComponent";
import PieChartComponent from "./components/PieChartComponent";
import PieCollection from "./components/PieCollection";
import {BrowserRouter, Route, Switch} from "react-router-dom";


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact strict path="/line" render={() => <LineGraphComponent/>}/>
					<Route exact strict path="/stacked" render={() => <StackedGraphComponent/>}/>
					<Route exact strict path="/pie" render={() => <PieChartComponent/>}/>
					<Route exact strict path="/pie/collection" render={() => <PieCollection/>}/>
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
