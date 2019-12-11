import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import React, {useEffect, useState} from "react";

import {barDataGetter} from "../../lib/DataFetcher";
import {adults, juniors, portableData, seniors, students} from "../checkboxes/CheckboxPerson";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";


const StackedGraphComponent = ({person, months, sellType, validity}) => {
	const [data, setData] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		barDataGetter([person, months, sellType, validity], finaliseTransaction);
	}, [person, months, sellType, validity]);

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
		<SpinnerComponent children={stackedGraph} isDataLoaded={isLoaded}/>
	);
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
});

export default connect(mapStateToProps)(StackedGraphComponent);
