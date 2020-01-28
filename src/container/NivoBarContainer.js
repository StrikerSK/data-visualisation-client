import React from "react";
import NivoBarComponent from "../components/nivo/NivoBarComponent";

import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import {
	ConnectedGroupModeSelect as GroupModeSelect,
	ConnectedLayoutSelect as LayoutSelect
} from "../components/selects/LayoutSelect";
import ColorSchemeSelector from "../components/selects/ColorSchemeSelector";
import CheckboxPerson from "../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";
import BarGeneratorButton from "../components/BarGeneratorButton";

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
