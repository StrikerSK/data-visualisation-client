import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts'

import {pieDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import {ApexRoundShapes} from "../StyledComponents";

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
		responsive: [{
			options: {
				chart: {
					width: "100%",
					height: "100%"
				}
			}
		}]
	};

	const chart = <ReactApexChart options={options} series={series} type="pie"/>;

	return (
		<ApexRoundShapes>
			<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
		</ApexRoundShapes>
	);
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
	color: state.generalReducer.color
});

export default connect(mapStateToProps)(ApexPieChart);
