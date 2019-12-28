import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {barDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {generateColor, getLabels} from "../../lib/Functions";


const BarChartComponent = ({months, person, validity, sellType}) => {
	const [data, setData] = useState([]);
	const [bars, setBars] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		createBars();
		changeLoadedState(true);

		function createBars(){
			setBars(getLabels(result).map(label => {
				return <Bar type="monotone" dataKey={label} fill={generateColor()}/>
			}))
		}
	};

	useEffect(() => {
		barDataGetter([person, months, sellType, validity], finaliseTransaction);
	}, [person, months, sellType, validity]);

	const barChart = (
		<ResponsiveContainer>
			<BarChart data={data} margin={{top: 0, right: 5, left: 10, bottom: 0}}>
				<XAxis dataKey="name"/>
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

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
});

export default connect(mapStateToProps)(BarChartComponent);
