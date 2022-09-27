import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {fetchBarData, nivoBarPath} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {generateColor, getLabels} from "../../lib/Functions";
import {accessAll} from "../../lib/ReduceAccessor";


const BarChartComponent = ({months, person, validity, sellType, layout}) => {
	const [data, setData] = useState([]);
	const [bars, setBars] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const processData = (data) => {
		setData(data);
		setBars(getLabels(data).map((label, index) => {
			return <Bar key={index} type="monotone" dataKey={label} fill={generateColor()}/>
		}))
	}

	useEffect(() => {
		fetchBarData( nivoBarPath, [person, months, sellType, validity])
			.then(({data}) => processData(data))
			.then(() => changeLoadedState(true))
			.catch(console.error);
	}, [person, months, sellType, validity]);

	const barChart = (
		<ResponsiveContainer>
			<BarChart data={data} margin={{top: 0, right: 5, left: 10, bottom: 0}}>
				<XAxis dataKey="month"/>
				<YAxis/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Tooltip/>
				{bars}
			</BarChart>
		</ResponsiveContainer>
	);

	return (
		<SpinnerComponent children={barChart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(BarChartComponent);
