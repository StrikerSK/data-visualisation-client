import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';

import {apexDataFetcher} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {monthArray} from "../checkboxes/CheckboxMonths";
import {connect} from "react-redux";

const ApexBarChart = ({months, person, validity, sellType, barLayout, barGrouping}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const options = {
		chart: {
			type: 'bar',
			stacked: barGrouping === "stacked"
		},
		dataLabels: {
			enabled: window.innerWidth > 770 && barGrouping === "stacked"
		},
		plotOptions: {
			bar: {
				horizontal: barLayout === "horizontal",
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
	}, [months, person, barLayout, barGrouping, validity, sellType]);

	const chart = <ReactApexChart options={options} series={data} type="bar" height={"100%"} width={"100%"}/>;

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
	barLayout: state.generalReducer.barLayoutValue,
	barGrouping: state.generalReducer.barGroupingValue,
});

export default connect(mapStateToProps)(ApexBarChart);
