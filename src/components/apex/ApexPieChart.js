import React from "react";
import ReactApexChart from 'react-apexcharts'

import {fetchBarData, nivoPiePath} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import {accessAll} from "../../lib/ReduceAccessor";

const ApexPieChart = ({months, person, validity, sellType}) => {
	const [series, setSeries] = React.useState([]);
	const [labels, setLabels] = React.useState([]);
	const [isLoaded, changeLoadedState] = React.useState(false);

	const processData = (data) => {
		setLabels(data.map(({label}) => label));
		setSeries(data.map(({value}) => value));
	};

	React.useEffect(() => {
		fetchBarData( nivoPiePath, [months, person, validity, sellType])
			.then(({data}) => processData(data))
			.then(() => changeLoadedState(true))
			.catch(console.error);
	}, [months, person, validity, sellType]);

	const options = {
		labels: labels,
		legend: {
			position: 'bottom',
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

	const chart = <ReactApexChart options={options} series={series} type="pie" width="100%" height="100%" className={"apex-chart"}/>;

	return (
		<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(ApexPieChart);
