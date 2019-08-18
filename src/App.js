import React, {Component} from 'react';
import './App.css';

import LineGraphComponent from "./components/LineGraphComponent";
import StackedGraphComponent from "./components/StackedGraphComponent";
import PieChartComponent from "./components/PieChartComponent";


class App extends Component {
	render() {
		return (
			<div>
				<LineGraphComponent/>
				<StackedGraphComponent/>
				<PieChartComponent/>
			</div>
		);
	}
}
export default App;
