import React, {useEffect, useState} from "react";
import {ResponsiveBubble} from "@nivo/circle-packing";
import SpinnerComponent from "../SpinnerComponent";
import {bubbleDataGetter} from "../../lib/DataFetcher";
import {connect} from "react-redux";
import {accessAll} from "../../lib/ReduceAccessor";

const NivoBubbleComponent = ({months, person, validity, sellType, color}) => {
	const [data, setData] = useState([{}]);
	const [isLoaded, changeLoadedState] = useState(false);

	const finaliseTransaction = (result) => {
		setData(result);
		changeLoadedState(true);
	};

	useEffect(() => {
		bubbleDataGetter([months, person, validity, sellType, color], finaliseTransaction);
	}, [months, person, validity, sellType, color]);

	const bubbleGraph = (
		<ResponsiveBubble
			root={data}
			margin={{top: 20, right: 20, bottom: 20, left: 20}}
			identity="name"
			value="value"
			colors={{scheme: color}}
			padding={6}
			labelTextColor={{from: "color", modifiers: [["darker", 0.8]]}}
			borderWidth={2}
			borderColor={{from: "color"}}
			defs={[
				{
					id: "lines",
					type: "patternLines",
					background: "none",
					color: "inherit",
					rotation: -45,
					lineWidth: 5,
					spacing: 8
				}
			]}
			fill={[{match: {depth: 1}, id: "lines"}]}
			animate={true}
			motionStiffness={90}
			motionDamping={12}
		/>
	);

	return <SpinnerComponent isDataLoaded={isLoaded} children={bubbleGraph}/>;
};

export default connect(accessAll)(NivoBubbleComponent);
