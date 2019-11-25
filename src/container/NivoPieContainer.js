import React from "react";

import NivoPieComponent from "../components/nivo/NivoPieComponent";
import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import ColorSchemeSelector from "../components/selects/ColorSchemeSelector";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";
import CheckboxPerson from "../components/checkboxes/CheckboxPerson";

const NivoPieContainer = () => {
	return (
		<GraphContainer>
			<NivoPieComponent/>
			<OptionComponent>
				<ColorSchemeSelector/>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};

export default NivoPieContainer;