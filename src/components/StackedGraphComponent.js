import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React, {useState, useEffect} from "react";
import '../App.css';

const StackedGraphComponent = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch("http://localhost:5000/", {
			method: "GET"
		}).then(response => response.json())
			.then((result) => getAllData(result))
	};

	const getAllData = (result) => {
		const myData = result.filter(({platnost, predaj}) => {
			return platnost === "Celkom" && predaj === "Čipová karta";
		});
		setData(myData);
	};

	return (
		<div className="App" id={"test"}>
			<ResponsiveContainer width="100%" height={500}>
				<AreaChart data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
					<CartesianGrid strokeDasharray="3 3"/>
					<XAxis dataKey="mesiac"/>
					<YAxis/>
					<Tooltip/>
					<Area type="monotone" dataKey="juniori" stackId="1" stroke="#8884d8" fill="#8884d8"/>
					<Area type="monotone" dataKey="studenti" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
					<Area type="monotone" dataKey="seniori" stackId="1" stroke="#d42121" fill="#d42121"/>
					<Area type="monotone" dataKey="dospeli" stackId="1" stroke="#e88c6d" fill="#e88c6d"/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default StackedGraphComponent;
