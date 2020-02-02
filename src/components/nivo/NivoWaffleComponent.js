import React, {useEffect, useState} from "react";
import {ResponsiveWaffle} from "@nivo/waffle";
import {pieDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {accessAll} from "../../lib/ReduceAccessor";
import {connect} from "react-redux";
import {adaptToWidth} from "../../lib/Functions";

const NivoWaffleComponent = ({months, person, validity, sellType, color}) => {
	const [data, setData] = useState([{}]);
	const [maxValue, setMaxValue] = useState(0);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		countTotal(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		pieDataGetter([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, validity, sellType, color]);

	const countTotal = (inputArray) => {
		let sum = 0;
		inputArray.forEach(({value}) => {
			sum += value;
		});
		setMaxValue(sum);
	};

	const waffleGraph = (
		<ResponsiveWaffle
			data={data}
			total={maxValue}
			rows={25}
			columns={25}
			margin={{top: 10, right: 10, bottom: 10, left: 120}}
			colors={{scheme: color}}
			borderColor={{from: "color", modifiers: [["darker", 0.3]]}}
			animate={true}
			motionStiffness={90}
			motionDamping={11}
			legends={[
				{
					anchor: "top-left",
					direction: "column",
					justify: false,
					translateX: adaptToWidth(0, -120),
					translateY: adaptToWidth(0, 30),
					itemsSpacing: 8,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: "left-to-right",
					itemOpacity: 1,
					itemTextColor: "#777",
					symbolSize: 20,
				}
			]}
		/>
	);

	return (
		<SpinnerComponent children={waffleGraph} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(NivoWaffleComponent);
