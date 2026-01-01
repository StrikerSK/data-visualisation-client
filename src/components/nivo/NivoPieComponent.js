import React from "react";
import {ResponsivePie} from "@nivo/pie";
import SpinnerComponent from "../SpinnerComponent";
import {fetchBarData, nivoPiePath} from "../../lib/DataFetcher";
import {connect} from "react-redux";
import {accessAll} from "../../lib/ReduceAccessor";
import {isDesktop} from "../../lib/Functions";

const NivoPieComponent = ({months, person, validity, sellType, color}) => {
	const [data, setData] = React.useState([{}]);
	const [isLoaded, changeLoadedState] = React.useState(false);

	React.useEffect(() => {
		fetchBarData( nivoPiePath, [months, person, validity, sellType])
			.then(({data}) => setData(data))
			.then(() => changeLoadedState(true))
			.catch(console.error);
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
			enableRadialLabels={isDesktop()}
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
					translateY: 55,
					itemWidth: 70,
					itemHeight: 20,
					itemDirection: "top-to-bottom",
					itemTextColor: "#999",
					symbolSize: 12,
					symbolShape: "circle"
				}
			]}
		/>
	);

	return <SpinnerComponent children={pieChart} isDataLoaded={isLoaded}/>;
};

export default connect(accessAll)(NivoPieComponent);
