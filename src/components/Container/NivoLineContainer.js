import React from "react";
import NivoLineComponent from "../nivo/NivoLineComponent";
import "../../css/GraphContainer.scss"
import CheckboxPerson from "../../lib/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";

const NivoLineContainer = () => {
	return (
		<GraphContainer>
			<NivoLineComponent/>
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
export default NivoLineContainer;