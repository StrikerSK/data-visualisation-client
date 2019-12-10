import React, {useEffect, useState} from "react";
import {ResponsivePie} from "@nivo/pie";
import SpinnerComponent from "../SpinnerComponent";
import {pieDataGetter} from "../../lib/DataFetcher";
import {connect} from "react-redux";
import {ResponsiveBar} from "@nivo/bar";

const NivoPieComponent = ({months, person, validity, sellType, color}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		pieDataGetter([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, validity, sellType, color]);

	const pieChart = (
		<ResponsivePie
			data={data}
			margin={{top: 20, right: 40, bottom: 70, left: 40}}
			innerRadius={0.5}
			padAngle={0.7}
			cornerRadius={3}
			colors={{scheme: color}}
			borderWidth={1}
			borderColor={{from: "color", modifiers: [["darker", 0.2]]}}
			enableRadialLabels={(window.innerWidth >= 770)}
			radialLabelsSkipAngle={10}
			radialLabelsTextXOffset={6}
			radialLabelsTextColor="#333333"
			radialLabelsLinkOffset={0}
			radialLabelsLinkDiagonalLength={16}
			radialLabelsLinkHorizontalLength={24}
			radialLabelsLinkStrokeWidth={1}
			radialLabelsLinkColor={{from: "color"}}
			slicesLabelsSkipAngle={10}
			slicesLabelsTextColor="#333333"
			animate={true}
			motionStiffness={90}
			motionDamping={15}
			defs={[
				{
					id: "dots",
					type: "patternDots",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					size: 4,
					padding: 1,
					stagger: true
				},
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "rgba(255, 255, 255, 0.3)",
					rotation: -45,
					lineWidth: 6,
					spacing: 10
				}
			]}
			fill={[
				{
					match: {
						id: "Prenosná"
					},
					id: "dots"
				},
				{
					match: {
						id: "Dospelý"
					},
					id: "dots"
				},
				{
					match: {
						id: "Študenti"
					},
					id: "dots"
				},
				{
					match: {
						id: "Dôchodcovia"
					},
					id: "dots"
				},
				{
					match: {
						id: "Juniori"
					},
					id: "lines"
				}
			]}
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					translateY: 30,
					itemWidth: 100,
					itemHeight: 10,
					itemDirection: "top-to-bottom",
					itemTextColor: "#999",
					symbolSize: 18,
					symbolShape: "circle"
				}
			]}
		/>
	);

	return <SpinnerComponent children={pieChart} isDataLoaded={isLoaded}/>;
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
	color: state.generalReducer.color
});

export default connect(mapStateToProps)(NivoPieComponent);
