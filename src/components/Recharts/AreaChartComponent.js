import React, {useState, useEffect} from 'react';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";

const AreaChartComponent = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("https://pid-data-server.herokuapp.com/recharts/area", {method: "GET"}).then(response => response.json()).then((result) => setData(result))
	};

	return (
		<div className="area-chart">
			<AreaChart width={1030} height={700} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>

				<defs>
					<linearGradient id="colorAdults" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
					</linearGradient>

					<linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
					</linearGradient>

					<linearGradient id="colorJuniors" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#111098" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#111098" stopOpacity={0}/>
					</linearGradient>

					<linearGradient id="colorPortables" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#c2b174" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#c2b174" stopOpacity={0}/>
					</linearGradient>

					<linearGradient id="colorSenior" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#df1f53" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#df1f53" stopOpacity={0}/>
					</linearGradient>
				</defs>

				<XAxis dataKey="name"/>
				<YAxis/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Tooltip/>

				<Area type="monotone" dataKey="adults" stroke="#8884d8" fillOpacity={1} fill="url(#colorAdults)"/>
				<Area type="monotone" dataKey="students" stroke="#82ca9d" fillOpacity={1} fill="url(#colorStudents)"/>
				<Area type="monotone" dataKey="juniors" stroke="#111098" fillOpacity={1} fill="url(#colorJuniors)"/>
				<Area type="monotone" dataKey="portable" stroke="#c2b174" fillOpacity={1} fill="url(#colorPortables)"/>
				<Area type="monotone" dataKey="seniors" stroke="#df1f53" fillOpacity={1} fill="url(#colorSenior)"/>
			</AreaChart>
		</div>
	);
};
export default AreaChartComponent;
