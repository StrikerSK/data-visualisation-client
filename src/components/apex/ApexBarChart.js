import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';

import {apexDataFetcher} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {monthArray} from "../checkboxes/CheckboxMonths";
import {connect} from "react-redux";

const ApexBarChart = ({months, person, validity, sellType, barLayout}) => {
	const [data, setData] = useState([{}]);
	const [isVertical, setVertical] = useState(false);
	const [isLoaded, changeLoadedState] = useState(false);

	const options = {
		chart: {
			height: 350,
			type: 'bar',
			stacked: true,
		},
		plotOptions: {
			bar: {
				horizontal: isVertical,
			},
		},
		stroke: {
			width: 1,
			colors: ['#fff']
		},
		xaxis: {
			categories: monthArray,
		},
		fill: {
			opacity: 1

		},
		legend: {
			position: 'top',
			horizontalAlign: 'left',
			offsetX: 40
		}
	};

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	const getLayout = () => {
		setVertical(barLayout === "horizontal");
	};

	useEffect(() => {
		getLayout();
		apexDataFetcher([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, barLayout, validity, sellType]);

	const chart = <ReactApexChart options={options} series={data} type="bar"/>;

	return (
		<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
	);
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
	color: state.generalReducer.color,
	barLayout: state.generalReducer.barLayoutValue
});

export default connect(mapStateToProps)(ApexBarChart);
