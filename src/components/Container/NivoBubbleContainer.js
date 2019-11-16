import React from "react";
import "../../css/GraphContainer.scss";
import CheckboxPerson from "../../lib/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import NivoBubbleComponent from "../nivo/NivoBubbleComponent";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";

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