import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';

import {pieDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import {ApexRoundShapes} from "../StyledComponents";

const ApexRadialChart = ({months, person, validity, sellType}) => {
	const [series, setSeries] = useState([]);
	const [labels, setLabels] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const options = {
		labels: labels,
		radialBar: {
			dataLabels: {
				name: {
					fontSize: '22px',
				},
				value: {
					fontSize: '16px',
				}
			}
		}
	};

	const finaliseTransaction = (result) => {
		const outData = result.map(({value}) => Math.round(value / getSum() * 100));
		const resultLabels = result.map(({label}) => label);

		setLabels(resultLabels);
		setSeries(outData);
		changeLoadedState(true);

		function getSum() {
			return result
				.map(({value}) => value)
				.reduce((total, sum) => total + sum);
		}
	};

	useEffect(() => {
		pieDataGetter([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, validity, sellType]);

	const chart = <ReactApexChart options={options} series={series} type="radialBar"/>;

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

export default connect(mapStateToProps)(ApexRadialChart);
