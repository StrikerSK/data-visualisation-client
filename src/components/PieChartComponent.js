import React, {Component} from 'react';
import '../App.css';
import PieChartElement from "./PieChartElement";

class PieChartComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {data: []};
	}

	componentDidMount() {

		this.getData();

	}

	getData() {
		fetch("http://localhost:5000/yearly", {
			method: "GET"
		}).then(response => response.json())
			.then((result) => this.setState({data: result}))
	}

	render() {
		const myData = this.state.data;

		return (
			<div className="pieChart">
				<PieChartElement myData={myData} radius={250}/>
			</div>
		);
	}
}

export default PieChartComponent;
