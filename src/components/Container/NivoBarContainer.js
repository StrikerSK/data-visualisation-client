import React from "react";
import NivoBarComponent from "../nivo/NivoBarComponent";
import "../../css/GraphContainer.scss";
import CheckboxPerson from "../../lib/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import {GroupModeSelect, LayoutSelect} from "../../lib/selects/LayoutSelect";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";
import BarGeneratorButton from "../../lib/BarGeneratorButton";

const NivoBarContainer = () => {
	return (
		<GraphContainer>
			<NivoBarComponent/>
			<OptionComponent>
				<ColorSchemeSelector/>
				<GroupModeSelect/>
				<LayoutSelect/>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
				<BarGeneratorButton/>
			</OptionComponent>
		</GraphContainer>
	);
};
export default NivoBarContainer;
