import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {barDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {adults, juniors, portableData, seniors, students} from "../checkboxes/CheckboxPerson";

const AreaChartComponent = ({months, person, validity, sellType}) => {
	const [data, setData] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		barDataGetter([person, months, sellType, validity], finaliseTransaction);
	}, [person, months, sellType, validity]);

	const areaChart = (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart data={data} margin={{top: 5, right: 0, left: 40, bottom: 0}}>

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

				<Area type="monotone" dataKey={adults} stroke="#8884d8" fillOpacity={1} fill="url(#colorAdults)"/>
				<Area type="monotone" dataKey={students} stroke="#82ca9d" fillOpacity={1} fill="url(#colorStudents)"/>
				<Area type="monotone" dataKey={juniors} stroke="#111098" fillOpacity={1} fill="url(#colorJuniors)"/>
				<Area type="monotone" dataKey={portableData} stroke="#c2b174" fillOpacity={1}
				      fill="url(#colorPortables)"/>
				<Area type="monotone" dataKey={seniors} stroke="#df1f53" fillOpacity={1} fill="url(#colorSenior)"/>
			</AreaChart>
		</ResponsiveContainer>
	);

	return (
		<SpinnerComponent children={areaChart} isDataLoaded={isLoaded}/>
	);
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType
});

export default connect(mapStateToProps)(AreaChartComponent);
