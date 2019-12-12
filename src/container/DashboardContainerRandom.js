import React from "react";

import NivoPieComponent from "../components/nivo/NivoPieComponent";
import NivoBarComponent from "../components/nivo/NivoBarComponent";
import NivoLineComponent from "../components/nivo/NivoLineComponent";
import NivoBubbleComponent from "../components/nivo/NivoBubbleComponent";
import DashboardTemplate from "../components/DashboardTemplate";
import NivoRadarComponent from "../components/nivo/NivoRadarComponent";
import NivoWaffleComponent from "../components/nivo/NivoWaffleComponent";

const DashboardContainerRandom = () => {
	const componentArray = [
		<NivoLineComponent/>,
		<NivoBarComponent/>,
		<NivoPieComponent/>,
		<NivoBubbleComponent/>,
		<NivoRadarComponent/>,
		<NivoWaffleComponent/>
	];

	const shuffleArray = () => componentArray
		.map(a => [Math.random(), a])
		.sort((a, b) => a[0] - b[0])
		.map(a => a[1]);

	return (
		<DashboardTemplate>
			{shuffleArray()}
		</DashboardTemplate>
	);
};
export default DashboardContainerRandom;
