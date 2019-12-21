import React, {useEffect, useState} from "react";
import ReactApexChart from 'react-apexcharts'

import {pieDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import styled from "styled-components";
import {connect} from "react-redux";

const OptionsComponent = styled.div`
  	grid-column: 1;
  	justify-self: center;
  	
  	width: 75%;
  	height: 75%;
`;

const ApexPieChart = ({months,person, validity, sellType}) => {
	const [series, setSeries] = useState([]);
	const [labels, setLabels] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		console.log(result);
		const outData = result.map(({value}) => value);
		const resultLabels = result.map(({label}) => label);

		setLabels(resultLabels);
		setSeries(outData);
		changeLoadedState(true);
	};

	useEffect(() => {
		pieDataGetter([months,person, validity, sellType], finaliseTransaction);
	}, [months,person, validity, sellType]);

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
		<OptionsComponent>
			<SpinnerComponent children={chart} isDataLoaded={isLoaded}/>
		</OptionsComponent>
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
