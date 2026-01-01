import React from "react";
import {ResponsiveWaffle} from "@nivo/waffle";
import {fetchBarData, nivoPiePath} from "../../lib/DataFetcher";
import SpinnerComponent from "../SpinnerComponent";
import {accessAll} from "../../lib/ReduceAccessor";
import {connect} from "react-redux";
import {adaptToWidth} from "../../lib/Functions";

const NivoWaffleComponent = ({months, person, validity, sellType, color}) => {
	const [data, setData] = React.useState([{}]);
	const [maxValue, setMaxValue] = React.useState(0);
	const [isLoaded, changeLoadedState] = React.useState(false);

	const processData = (result) => {
		setData(result);
		setMaxValue(result.reduce((acc, {value}) => acc + value, 0));
	};

	React.useEffect(() => {
		fetchBarData( nivoPiePath, [months, person, validity, sellType])
			.then(({data}) => processData(data))
			.then(() => changeLoadedState(true))
			.catch(console.error);
	}, [months, person, validity, sellType, color]);

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
					anchor: adaptToWidth("left", "bottom"),
					direction: adaptToWidth("column", "row"),
					justify: false,
					translateX: adaptToWidth(-100, 0),
					translateY: adaptToWidth(50, 30),
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
