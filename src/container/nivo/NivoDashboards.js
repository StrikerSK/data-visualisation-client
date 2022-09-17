import React from "react";

import NivoPieComponent from "../../components/nivo/NivoPieComponent";
import NivoBarComponent from "../../components/nivo/NivoBarComponent";
import NivoLineComponent from "../../components/nivo/NivoLineComponent";
import NivoBubbleComponent from "../../components/nivo/NivoBubbleComponent";

import DashboardTemplate from "../../components/layout/DashboardTemplate";
import NivoRadarComponent from "../../components/nivo/NivoRadarComponent";
import NivoWaffleComponent from "../../components/nivo/NivoWaffleComponent";

const componentArray = [
	<NivoLineComponent/>,
	<NivoBarComponent/>,
	<NivoPieComponent/>,
	<NivoBubbleComponent/>,
	<NivoRadarComponent/>,
	<NivoWaffleComponent/>
];

const shuffleArray = () => componentArray.sort(() => Math.random() - 0.5);

export const NivoDashboards = () => {
	return (
		<DashboardTemplate>
			<NivoLineComponent/>
			<NivoBarComponent/>
			<NivoPieComponent/>
			<NivoBubbleComponent/>
		</DashboardTemplate>
	);
};

export const NivoDashboardsRandom = () => {
	return (
		<DashboardTemplate>
			{shuffleArray()}
		</DashboardTemplate>
	);
};

export default {NivoDashboards, NivoDashboardsRandom};
