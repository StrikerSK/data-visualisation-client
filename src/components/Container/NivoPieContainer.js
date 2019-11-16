import React from "react";
import "../../css/GraphContainer.scss"
import NivoPieComponent from "../nivo/NivoPieComponent";
import CheckboxValidity from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";

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