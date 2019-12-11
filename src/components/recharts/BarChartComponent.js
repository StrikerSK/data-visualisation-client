import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {adults, juniors, portableData, seniors, students} from "../checkboxes/CheckboxPerson";
import {barDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";


const BarChartComponent = ({months, person, validity, sellType}) => {
	const [data, setData] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		barDataGetter([person, months, sellType, validity], finaliseTransaction);
	}, [person, months, sellType, validity]);

	const barChart = (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart data={data} margin={{top: 5, right: 0, left: 40, bottom: 0}}>
				<XAxis dataKey="name"/>
				<YAxis/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Tooltip/>

				<Bar type="monotone" dataKey={adults} fill="#8884d8"/>
				<Bar type="monotone" dataKey={students} fill="#82ca9d"/>
				<Bar type="monotone" dataKey={juniors} fill="#111098"/>
				<Bar type="monotone" dataKey={seniors} fill="#df1f53"/>
				<Bar type="monotone" dataKey={portableData} fill="#c2b174"/>
			</BarChart>
		</ResponsiveContainer>
	);

	return (
		<SpinnerComponent children={barChart} isDataLoaded={isLoaded}/>
	);
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
});

export default connect(mapStateToProps)(BarChartComponent);
