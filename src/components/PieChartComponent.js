import React, {Component} from 'react';
import '../App.css';
import {Pie, PieChart} from "recharts";

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
			<div className="App">
				<PieChart width={730} height={250}>
					<Pie data={myData}
					     dataKey="value"
					     nameKey="nazov"
					     cx="50%"
					     cy="50%"
					     outerRadius={100}
					     fill="#8884d8"
					     label={({
						             cx,
						             cy,
						             midAngle,
						             innerRadius,
						             outerRadius,
						             value,
						             index
					             }) => {
						     console.log("handling label?");
						     const RADIAN = Math.PI / 180;
						     // eslint-disable-next-line
						     const radius = 25 + innerRadius + (outerRadius - innerRadius);
						     // eslint-disable-next-line
						     const x = cx + radius * Math.cos(-midAngle * RADIAN);
						     // eslint-disable-next-line
						     const y = cy + radius * Math.sin(-midAngle * RADIAN);

						     return (
							     <text
								     x={x}
								     y={y}
								     fill="#8884d8"
								     textAnchor={x > cx ? "start" : "end"}
								     dominantBaseline="central"
							     >
								     {myData[index].nazov} ({value})
							     </text>
						     );
					     }}/>
				</PieChart>
			</div>
		);
	}
}

export default PieChartComponent;
