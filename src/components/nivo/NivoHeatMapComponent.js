import React, {useEffect, useState} from "react";
import {ResponsiveHeatMap} from "@nivo/heatmap";
import SpinnerComponent from "../SpinnerComponent";
import {barDataGetter} from "../../lib/DataFetcher";
import {connect} from "react-redux";
import {dataKeys} from "../controlls/checkboxes/CheckboxPerson";
import {accessAll} from "../../lib/ReduceAccessor";
import {isDesktop} from "../../lib/Functions";

const NivoHeatMapComponent = ({validity, sellType, color}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		barDataGetter([validity, sellType], finaliseTransaction);
	}, [validity, sellType, color]);

	const graphHeatMap = (
		<ResponsiveHeatMap
			data={data}
			keys={dataKeys}
			indexBy="month"
			margin={{top: 100, right: 0, bottom: 0, left: 75}}
			forceSquare={isDesktop()}
			colors={color}
			axisTop={{orient: "top", tickSize: 5, tickPadding: 5, tickRotation: -90, legend: "", legendOffset: 36}}
			axisRight={null}
			axisBottom={null}
			axisLeft={{
				orient: "left",
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "Mesiac",
				legendPosition: "middle",
				legendOffset: -60
			}}
			cellOpacity={1}
			cellBorderColor={{from: "color", modifiers: [["darker", 0.4]]}}
			labelTextColor={{from: "color", modifiers: [["darker", 1.8]]}}
			defs={[
				{
					id: "lines",
					type: "patternLines",
					background: "inherit",
					color: "rgba(0, 0, 0, 0.1)",
					rotation: -45,
					lineWidth: 4,
					spacing: 7
				}
			]}
			fill={[{id: "lines"}]}
			animate={true}
			motionStiffness={80}
			motionDamping={9}
			hoverTarget="cell"
			cellHoverOthersOpacity={0.25}
		/>
	);

	return <SpinnerComponent isDataLoaded={isLoaded} children={graphHeatMap}/>
};

export default connect(accessAll)(NivoHeatMapComponent);
