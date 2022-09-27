import React, {useEffect, useState} from "react";
import {ResponsiveRadar} from "@nivo/radar";
import {barDataGetter} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {dataKeys} from "../controlls/checkboxes/CheckboxPerson";
import {connect} from "react-redux";
import {accessAll} from "../../lib/ReduceAccessor";

const NivoRadarComponent = () => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		barDataGetter([], finaliseTransaction)
	}, []);

	const radarGraph = (
		<ResponsiveRadar
			data={data}
			keys={dataKeys}
			indexBy="month"
			maxValue="auto"
			margin={{top: 70, right: 70, bottom: 40, left: 85}}
			curve="linearClosed"
			borderWidth={2}
			borderColor={{from: "color"}}
			gridLevels={5}
			gridShape="circular"
			gridLabelOffset={36}
			enableDots={true}
			dotSize={5}
			dotColor={{theme: "background"}}
			dotBorderWidth={2}
			dotBorderColor={{from: "color"}}
			enableDotLabel={false}
			dotLabel="value"
			dotLabelYOffset={-12}
			colors={{scheme: "nivo"}}
			fillOpacity={0.25}
			blendMode="multiply"
			animate={true}
			motionStiffness={90}
			motionDamping={15}
			isInteractive={true}
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					translateX: -50,
					translateY: -40,
					itemWidth: 80,
					itemHeight: 20,
					itemTextColor: "#999",
					symbolSize: 12,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: "#000"
							}
						}
					]
				}
			]}
		/>
	);

	return (
		<SpinnerComponent children={radarGraph} isDataLoaded={isLoaded}/>
	)
};

export default connect(accessAll)(NivoRadarComponent);
