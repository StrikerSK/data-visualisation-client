import React from "react";
import "../../css/GraphContainer.scss"
import NivoHeatMapComponent from "../nivo/NivoHeatMapComponent";
import CheckboxValidity from "../../lib/checkboxes/CheckboxValidity";
import CheckboxSellType from "../../lib/checkboxes/CheckboxSellType";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";
import ColorSchemeSelectorHeatmap from "../../lib/selects/ColorSchemeSelectorHeatmap";

const NivoHeatMapContainer = () => {
	return (
		<GraphContainer>
			<NivoHeatMapComponent/>
			<OptionComponent>
				<ColorSchemeSelectorHeatmap/>
				<CheckboxValidity/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	);
};

export default NivoHeatMapContainer;