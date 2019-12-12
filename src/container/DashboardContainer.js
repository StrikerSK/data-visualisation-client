import React from "react";

import NivoPieComponent from "../components/nivo/NivoPieComponent";
import NivoBarComponent from "../components/nivo/NivoBarComponent";
import NivoLineComponent from "../components/nivo/NivoLineComponent";
import NivoBubbleComponent from "../components/nivo/NivoBubbleComponent";

import DashboardTemplate from "../components/DashboardTemplate";

const DashboardContainer = () => {
	return (
		<DashboardTemplate>
			<NivoLineComponent/>
			<NivoBarComponent/>
			<NivoPieComponent/>
			<NivoBubbleComponent/>
		</DashboardTemplate>
	);
};
export default DashboardContainer;
