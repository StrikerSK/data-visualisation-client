import React from "react";
import "../stylesheet/GraphContainer.scss";

import NivoBubbleComponent from "../components/nivo/NivoBubbleComponent";
import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import ColorSchemeSelector from "../components/selects/ColorSchemeSelector";
import CheckboxPerson from "../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";

const NivoBubbleContainer = () => {
	return (
		<GraphContainer>
			<NivoBubbleComponent/>
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

export default NivoBubbleContainer;