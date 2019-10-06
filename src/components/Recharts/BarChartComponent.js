import React, {useState, useEffect} from 'react';
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

const BarChartComponent = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:8080/recharts/area", {method: "GET"}).then(response => response.json()).then((result) => setData(result))
	};

	return (
		<div className="area-chart">
			<BarChart width={1030} height={700} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
				<XAxis dataKey="name"/>
				<YAxis/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Tooltip/>

				<Bar type="monotone" dataKey="adults" fill="#8884d8"/>
				<Bar type="monotone" dataKey="students" fill="#82ca9d"/>
				<Bar type="monotone" dataKey="juniors" fill="#111098"/>
				<Bar type="monotone" dataKey="seniors" fill="#df1f53"/>
				<Bar type="monotone" dataKey="portable" fill="#c2b174"/>
			</BarChart>
		</div>
	);
};
export default BarChartComponent;
