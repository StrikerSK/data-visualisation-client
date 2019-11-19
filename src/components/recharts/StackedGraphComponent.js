import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React, {useEffect, useState} from "react";
import "../../App.css";
import {barDataGetter} from "../../lib/DataFetcher";
import {adults, juniors, portableData, seniors, students} from "../checkboxes/CheckboxPerson";
import {GraphContainer} from "../LayoutContainers";
import SpinnerComponent from "../SpinnerComponent";


const StackedGraphComponent = () => {
	const [data, setData] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		barDataGetter([], finaliseTransaction);
	}, []);

	const stackedGraph = (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart data={data} margin={{top: 5, right: 0, left: 40, bottom: 0}}>
				<CartesianGrid strokeDasharray="3 3"/>
				<XAxis dataKey="mesiac"/>
				<YAxis/>
				<Tooltip/>
				<Area type="monotone" dataKey={juniors} stackId="1" stroke="#8884d8" fill="#8884d8"/>
				<Area type="monotone" dataKey={students} stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
				<Area type="monotone" dataKey={seniors} stackId="1" stroke="#d42121" fill="#d42121"/>
				<Area type="monotone" dataKey={portableData} stackId="1" stroke="#e81c6d" fill="#e81c6d"/>
				<Area type="monotone" dataKey={adults} stackId="1" stroke="#e88c6d" fill="#e88c6d"/>
			</AreaChart>
		</ResponsiveContainer>
	);

	return (
		<GraphContainer>
			<SpinnerComponent children={stackedGraph} isDataLoaded={isLoaded}/>
		</GraphContainer>
	);
};
export default StackedGraphComponent;
