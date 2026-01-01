import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React, {useEffect, useState} from "react";

import {fetchBarData, nivoBarPath} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import {generateColor, getLabels} from "../../lib/Functions";
import {accessAll} from "../../lib/ReduceAccessor";


const StackedGraphComponent = ({person, months, sellType, validity}) => {
	const [data, setData] = useState([]);
	const [area, setArea] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const processData = (data) => {
		setData(data);
		setArea(getLabels(data).map(label => {
			const generatedColor = generateColor();
			return <Area type="monotone" dataKey={label} stackId="1" stroke={generatedColor} fill={generatedColor}/>
		}));
	};

	useEffect(() => {
		fetchBarData( nivoBarPath, [months, person, validity, sellType])
			.then(({data}) => processData(data))
			.then(() => changeLoadedState(true))
			.catch(console.error);
	}, [months, person, validity, sellType]);

	const stackedGraph = (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart data={data} margin={{top: 0, right: 5, left: 10, bottom: 0}}>
				<CartesianGrid strokeDasharray="3 3"/>
				<XAxis dataKey="mesiac"/>
				<YAxis/>
				<Tooltip/>
				{area}
			</AreaChart>
		</ResponsiveContainer>
	);

	return (
		<SpinnerComponent children={stackedGraph} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(StackedGraphComponent);
