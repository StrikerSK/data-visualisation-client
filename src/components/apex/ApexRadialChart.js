import React from "react";
import ReactApexChart from 'react-apexcharts';

import {fetchBarData, nivoPiePath} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import {accessAll} from "../../lib/ReduceAccessor";

const ApexRadialChart = ({months, person, validity, sellType}) => {
	const [series, setSeries] = React.useState([]);
	const [labels, setLabels] = React.useState([]);
	const [isLoaded, changeLoadedState] = React.useState(false);

	const options = {
		labels: labels,
		legend: {
			show: true
		}
	};

	const processData = (result) => {
		const getSum = () => {
			return result
				.map(({value}) => value)
				.reduce((total, sum) => total + sum);
		}

		setLabels(result.map(({label}) => label));
		setSeries(result.map(({value}) => Math.round(value / getSum() * 100)));
	};

	React.useEffect(() => {
		fetchBarData( nivoPiePath, [person, months, sellType, validity])
			.then(({data}) => processData(data))
			.then(() => changeLoadedState(true))
			.catch(console.error);
	}, [person, months, sellType, validity]);

	const chart = <ReactApexChart options={options} series={series} type="radialBar"/>;

	return (
		<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(ApexRadialChart);
