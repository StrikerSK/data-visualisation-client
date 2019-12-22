import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';

import {apexDataFetcher} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {monthArray} from "../checkboxes/CheckboxMonths";
import {connect} from "react-redux";

const ApexLineChart = ({months, person, validity, sellType}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const options = {
		chart: {
			type: 'line',
			zoom: {
				enabled: false
			}
		},
		series: [data],
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			},
		},
		xaxis: {
			categories: monthArray,
		},
		legend: {
			position: 'top',
			horizontalAlign: 'center',
			offsetX: 40
		}
	};

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		apexDataFetcher([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, validity, sellType]);

	const chart = <ReactApexChart options={options} series={data} type="line" height={"100%"} width={"100%"}/>;

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

export default connect(mapStateToProps)(ApexLineChart);
