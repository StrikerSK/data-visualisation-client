import React, {useState} from "react";
import NivoBarComponent from "../nivo/NivoBarComponent";
import "../../css/GraphContainer.scss";
import CheckboxPerson from "../../lib/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import {GroupModeSelect, LayoutSelect} from "../../lib/selects/LayoutSelect";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";
import BarGeneratorButton, {defaultBarOrder} from "../../lib/BarGeneratorButton";

const NivoBarContainer = () => {
	const [layout, setLayout] = useState("vertical");
	const [grouping, setGrouping] = useState("stacked");
	const [barOrdering, setBarOrdering] = useState(defaultBarOrder);

	return (
		<GraphContainer>
			<NivoBarComponent barLayout={layout} barGrouping={grouping} barOrder={barOrdering}/>
			<OptionComponent>
				<ColorSchemeSelector/>
				<GroupModeSelect current={grouping} dataSetter={setGrouping}/>
				<LayoutSelect current={layout} dataSetter={setLayout}/>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
				<BarGeneratorButton dataSetter={setBarOrdering}/>
			</OptionComponent>
		</GraphContainer>
	);
};
export default NivoBarContainer;
