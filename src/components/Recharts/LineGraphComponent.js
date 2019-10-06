import React, {useState, useEffect} from 'react';
import '../../App.css';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const LineGraphComponent = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:8080/recharts/area", {method: "GET"}).then(response => response.json()).then((result) => setData(result))
	};

	return (
		<div className="App">
			<LineChart width={1000} height={600} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
				<defs>

					<linearGradient id="colorSenior" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#d42121" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#d42121" stopOpacity={0}/>
					</linearGradient>

					<linearGradient id="colorJuniori" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
					</linearGradient>

					<linearGradient id="colorPrenosna" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#e81c6d" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#e81c6d" stopOpacity={0}/>
					</linearGradient>

					<linearGradient id="colorStudenti" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
					</linearGradient>

					<linearGradient id="colorDospeli" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#e88c6d" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#e88c6d" stopOpacity={0}/>
					</linearGradient>

				</defs>

				<XAxis dataKey="name"/>
				<YAxis/>

				<CartesianGrid strokeDasharray="3 3"/>

				<Tooltip/>

				<Line type="monotone" dataKey="juniors" stroke="#8884d8"/>
				<Line type="monotone" dataKey="students" stroke="#82ca9d"/>
				<Line type="monotone" dataKey="portable" stroke="#e81c6d"/>
				<Line type="monotone" dataKey="seniors" stroke="#d42121"/>
				<Line type="monotone" dataKey="adults" stroke="#e88c6d"/>
			</LineChart>
		</div>
	);
};

export default LineGraphComponent;
