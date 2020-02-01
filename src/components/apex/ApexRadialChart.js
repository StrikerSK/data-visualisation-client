import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts';

import {pieDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {connect} from "react-redux";
import styled from "styled-components";
import {accessAll} from "../../lib/ReduceAccessor";

export const RadialBox = styled.div`
  	grid-column: 1;
  	justify-self: center;
  	
  	width: 75%;
  	height: 75%;
  	
  	margin: 0 auto;
  	
  	@media screen and (max-width: 770px) {
		width: 100%;
		height: 100%;
		
		align-self: center;
	}
`;

const ApexRadialChart = ({months, person, validity, sellType}) => {
	const [series, setSeries] = useState([]);
	const [labels, setLabels] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const options = {
		labels: labels,
		legend: {
			show: false
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
		<RadialBox>
			<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
		</RadialBox>
	);
};

export default connect(accessAll)(ApexRadialChart);
