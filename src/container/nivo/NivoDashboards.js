import React from "react";

import NivoPieComponent from "../../components/nivo/NivoPieComponent";
import NivoBarComponent from "../../components/nivo/NivoBarComponent";
import NivoLineComponent from "../../components/nivo/NivoLineComponent";
import NivoBubbleComponent from "../../components/nivo/NivoBubbleComponent";

import DashboardLayout from "../../components/layout/DashboardLayout";
import NivoWaffleComponent from "../../components/nivo/NivoWaffleComponent";

const componentArray = [
	<NivoLineComponent/>,
	<NivoBarComponent/>,
	<NivoPieComponent/>,
	<NivoBubbleComponent/>,
	<NivoWaffleComponent/>
];

const shuffleArray = () => componentArray.sort(() => Math.random() - 0.5);

export const NivoDashboards = () => {
	return (
		<DashboardLayout>
			<NivoLineComponent/>
			<NivoBarComponent/>
			<NivoPieComponent/>
			<NivoBubbleComponent/>
		</DashboardLayout>
	);
};

export const NivoDashboardsRandom = () => {
	return (
		<DashboardLayout>
			{shuffleArray()}
		</DashboardLayout>
	);
};

export default {NivoDashboards, NivoDashboardsRandom};
