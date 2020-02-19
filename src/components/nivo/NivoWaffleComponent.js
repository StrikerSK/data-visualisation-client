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
			margin={adaptToWidth({top: 10, right: 10, bottom: 10, left: 120},{top: 10, right: 10, bottom: 50, left: 10})}
			colors={{scheme: color}}
			borderColor={{from: "color", modifiers: [["darker", 0.3]]}}
			animate={true}
			motionStiffness={90}
			motionDamping={11}
			legends={[
				{
					anchor: adaptToWidth("top-left", "bottom"),
					direction: adaptToWidth("column", "row"),
					justify: false,
					translateX: adaptToWidth(0, 0),
					translateY: adaptToWidth(0, 30),
					itemsSpacing: adaptToWidth(8, 2),
					itemWidth: adaptToWidth(100, 65),
					itemHeight: 20,
					itemDirection: adaptToWidth("left-to-right", "top-to-bottom"),
					itemOpacity: 1,
					itemTextColor: "#777",
					symbolSize: adaptToWidth(20, 12),
					symbolShape: "circle"
				}
			]}
		/>
	);

	return (
		<SpinnerComponent children={waffleGraph} isDataLoaded={isLoaded}/>
	);
};

export default connect(accessAll)(NivoWaffleComponent);
