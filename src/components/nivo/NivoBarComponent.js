import React, {useEffect, useState} from "react";
import {ResponsiveBar} from "@nivo/bar";
import SpinnerComponent from "../SpinnerComponent";
import {barDataGetter} from "../../lib/DataFetcher";
import {connect} from "react-redux";

const NivoBarComponent = ({barGrouping, barLayout, months, person, validity, sellType, color}) => {
	const [data, setData] = useState([{}]);
	const [labels, setLabels] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setLabels(getLabels(result));
		setData(result);
		changeLoadedState(true);

		function getLabels(inputObject) {
			const obj = inputObject[0];
			Object.keys(obj).forEach((property) => {
				if (obj[property] === 0 || property === "month") {
					delete obj[property]
				}
			});
		}
	};

	useEffect(() => {
		// console.log(box2.offsetWidth);
		barDataGetter([person, months, sellType, validity], finaliseTransaction);
	}, [person, months, sellType, validity]);

	const barGraph = (
		<ResponsiveBar
			data={data}
			keys={labels}
			indexBy="month"
			margin={(window.innerWidth < 770 ? {top: 10, right: 5, bottom: 80, left: 70} : {
				top: 20,
				right: 30,
				bottom: 80,
				left: 80
			})}
			padding={0.3}
			groupMode={barGrouping}
			layout={barLayout}
			colors={{scheme: color}}
			defs={[
				{
					id: "dots",
					type: "patternDots",
					background: "inherit",
					color: "#38bcb2",
					size: 4,
					padding: 1,
					stagger: true
				},
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "#eed312",
					rotation: -45,
					lineWidth: 6,
					spacing: 10
				}
			]}
			borderColor={{from: "color", modifiers: [["darker", 1.6]]}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: window.innerWidth < 770 ? -25 : 0,
				legendPosition: "middle",
				legendOffset: 36
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "Predaj lístkov",
				legendPosition: "middle",
				legendOffset: -60
			}}
			enableLabel={(window.innerWidth >= 770)}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{from: "color", modifiers: [["darker", 1.6]]}}
			legends={[
				{
					dataFrom: "keys",
					anchor: "bottom",
					direction: "row",
					justify: false,
					translateX: -40,
					translateY: 60,
					itemWidth: 70,
					itemHeight: 15,
					itemDirection: "top-to-bottom",
					symbolSize: 12,
					symbolShape: "circle"
				}
			]}
			animate={true}
			motionStiffness={90}
			motionDamping={15}
		/>
	);

	return <SpinnerComponent isDataLoaded={isLoaded} children={barGraph}/>
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
	color: state.generalReducer.color,
	barGrouping: state.generalReducer.barGroupingValue,
	barLayout: state.generalReducer.barLayoutValue
});

export default connect(mapStateToProps)(NivoBarComponent);
