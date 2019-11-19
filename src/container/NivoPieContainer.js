import React from "react";
import "../stylesheet/GraphContainer.scss"

import NivoPieComponent from "../components/nivo/NivoPieComponent";
import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import ColorSchemeSelector from "../components/selects/ColorSchemeSelector";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";

const NivoPieContainer = () => {
	return (
		<GraphContainer>
			<NivoPieComponent/>
			<OptionComponent>
				<ColorSchemeSelector/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};

export default NivoPieContainer;