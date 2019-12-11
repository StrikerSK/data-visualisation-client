import React from "react";
import {HeaderComponent} from "../components/LayoutContainers";

import NivoPieComponent from "../components/nivo/NivoPieComponent";
import NivoBarComponent from "../components/nivo/NivoBarComponent";
import NivoLineComponent from "../components/nivo/NivoLineComponent";
import NivoBubbleComponent from "../components/nivo/NivoBubbleComponent";

import {DashboardBox, DashboardItem} from "../components/StyledComponents";

const DashboardContainer = () => {
	return (
		<DashboardBox>
			<DashboardItem row={1} mrow={1} column={"2/4"}>
				<HeaderComponent/>
			</DashboardItem>
			<DashboardItem row={2} mrow={2} column={2}>
				<NivoLineComponent/>
			</DashboardItem>
			<DashboardItem row={3} mrow={3} column={3}>
				<NivoBarComponent/>
			</DashboardItem>
			<DashboardItem row={2} mrow={4} column={3}>
				<NivoPieComponent/>
			</DashboardItem>
			<DashboardItem row={3} mrow={5} column={2}>
				<NivoBubbleComponent/>
			</DashboardItem>
		</DashboardBox>
	);
};
export default DashboardContainer;
