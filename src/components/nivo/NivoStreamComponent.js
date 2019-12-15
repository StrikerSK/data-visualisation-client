import React, {useEffect, useState} from "react";
import {ResponsiveStream} from "@nivo/stream";
import {streamDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {dataKeys} from "../checkboxes/CheckboxPerson";

const NivoStreamComponent = () => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	useEffect(() => {
		streamDataGetter([], finaliseTransaction);
	}, []);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	const streamGraph = (
		<ResponsiveStream
			data={data}
			keys={dataKeys}
			margin={{top: 50, right: 110, bottom: 50, left: 60}}
			axisTop={"Test"}
			axisRight={null}
			axisBottom={{
				orient: "bottom",
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "",
				legendOffset: 36
			}}
			axisLeft={{orient: "left", tickSize: 5, tickPadding: 5, tickRotation: 0, legend: "", legendOffset: -40}}
			offsetType="expand"
			colors={{scheme: "nivo"}}
			fillOpacity={0.85}
			curve="basis"
			borderColor={{theme: "background"}}
			defs={[
				{
					id: "dots",
					type: "patternDots",
					background: "inherit",
					color: "#2c998f",
					size: 4,
					padding: 2,
					stagger: true
				},
				{
					id: "squares",
					type: "patternSquares",
					background: "inherit",
					color: "#e4c912",
					size: 6,
					padding: 2,
					stagger: true
				}
			]}
			fill={[
				{
					match: {
						id: "adults"
					},
					id: "dots"
				},
				{
					match: {
						id: "seniors"
					},
					id: "squares"
				}
			]}
			dotSize={8}
			dotColor={{from: "color"}}
			dotBorderWidth={2}
			dotBorderColor={{from: "color", modifiers: [["darker", 0.7]]}}
			animate={true}
			motionStiffness={90}
			motionDamping={15}
			legends={[
				{
					anchor: "bottom-right",
					direction: "column",
					translateX: 100,
					itemWidth: 80,
					itemHeight: 20,
					itemTextColor: "#999999",
					symbolSize: 12,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: "#000000"
							}
						}
					]
				}
			]}
		/>
	);

	return (
		<SpinnerComponent children={streamGraph} isDataLoaded={isLoaded}/>
	);
};
export default NivoStreamComponent;
