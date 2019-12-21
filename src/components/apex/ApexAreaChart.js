import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';

import {apexDataFetcher} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {monthArray} from "../checkboxes/CheckboxMonths";
import {connect} from "react-redux";

const ApexAreaChart = ({months, person, validity, sellType}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const options = {
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		xaxis: {
			categories: monthArray,
		}
	};

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		apexDataFetcher([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, validity, sellType]);

	const chart = <ReactApexChart options={options} series={data} type="area"/>;

	return (
		<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
	);
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
	color: state.generalReducer.color
});

export default connect(mapStateToProps)(ApexAreaChart);
