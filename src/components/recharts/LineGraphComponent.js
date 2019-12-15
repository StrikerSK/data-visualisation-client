import React, {useEffect, useState} from "react";

import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {connect} from "react-redux";

import {adults, juniors, portableData, seniors, students} from "../checkboxes/CheckboxPerson";

import {barDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";

const LineGraphComponent = ({months, person, validity, sellType}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		barDataGetter([months, person, validity, sellType], setData);
	}, [months, person, validity, sellType]);

	const lineGraph = (
		<ResponsiveContainer>
			<LineChart data={data} margin={{top: 0, right: 5, left: 10, bottom: 0}}>
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

				<Line type="monotone" dataKey={juniors} stroke="#8884d8"/>
				<Line type="monotone" dataKey={students} stroke="#82ca9d"/>
				<Line type="monotone" dataKey={portableData} stroke="#e81c6d"/>
				<Line type="monotone" dataKey={seniors} stroke="#d42121"/>
				<Line type="monotone" dataKey={adults} stroke="#e88c6d"/>
			</LineChart>
		</ResponsiveContainer>
	);

	return (
		<SpinnerComponent children={lineGraph} isDataLoaded={true}/>
	);
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
});

export default connect(mapStateToProps)(LineGraphComponent);
