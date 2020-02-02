import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts'

import {pieDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import {accessAll} from "../../lib/ReduceAccessor";

const ApexPieChart = ({months, person, validity, sellType}) => {
	const [series, setSeries] = useState([]);
	const [labels, setLabels] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		const outData = result.map(({value}) => value);
		const resultLabels = result.map(({label}) => label);

		setLabels(resultLabels);
		setSeries(outData);
		changeLoadedState(true);
	};

	useEffect(() => {
		pieDataGetter([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, validity, sellType]);

	const options = {
		labels: labels,
		legend: {
			position: 'top',
			horizontalAlign: 'center'
		},
		responsive: [{
			options: {
				chart: {
					width: "100%",
					height: "100%"
				}
			}
		}]
	};

	const chart = <ReactApexChart options={options} series={series} type="pie" height={"100%"} width={"100%"}/>;

	return (
		<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(ApexPieChart);
