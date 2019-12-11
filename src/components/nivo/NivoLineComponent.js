import React, {useEffect, useState} from "react";
import {ResponsiveLine} from "@nivo/line";
import SpinnerComponent from "../SpinnerComponent";
import {lineDataGetter} from "../../lib/DataFetcher";
import {connect} from "react-redux";

const NivoLineComponent = ({months, person, validity, sellType, color}) => {
	const [data, setData] = useState([]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		lineDataGetter([months, person, validity, sellType], finaliseTransaction);
	}, [months, person, validity, sellType, color]);

	const LineGraph = (
		<ResponsiveLine
			data={data}
			margin={{top: 5, right: 15, bottom: 80, left: 65}}
			xScale={{type: "point"}}
			yScale={{type: "linear", stacked: true, min: "auto", max: "auto"}}
			curve="linear"
			axisTop={null}
			axisRight={null}
			axisBottom={{
				orient: "bottom",
				tickSize: 5,
				tickPadding: 5,
				tickRotation: window.innerWidth < 770 ? -20 : 0,
				legendOffset: 26,
				legendPosition: "middle"
			}}
			axisLeft={{
				orient: "left",
				tickSize: 6,
				tickPadding: 3,
				tickRotation: 0,
				legend: "Predaj lístkov",
				legendOffset: -60,
				legendPosition: "top"
			}}
			colors={{scheme: color}}
			pointSize={10}
			pointColor={{theme: "background"}}
			pointBorderWidth={2}
			pointBorderColor={{from: "serieColor"}}
			pointLabel="y"
			pointLabelYOffset={-12}
			useMesh={true}
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					justify: false,
					translateX: -40,
					translateY: 55,
					itemsSpacing: 0,
					itemDirection: "top-to-bottom",
					itemWidth: 80,
					itemHeight: 10,
					itemOpacity: 1,
					symbolSize: 12,
					symbolShape: "circle",
					symbolBorderColor: "rgba(0, 0, 0, .5)"
				}
			]}
		/>
	);

	return <SpinnerComponent children={LineGraph} isDataLoaded={isLoaded}/>
};

const mapStateToProps = state => ({
	months: state.generalReducer.months,
	person: state.generalReducer.person,
	validity: state.generalReducer.validity,
	sellType: state.generalReducer.sellType,
	color: state.generalReducer.color
});

export default connect(mapStateToProps)(NivoLineComponent);
