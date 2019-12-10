import React from "react";

import NivoHeatMapComponent from "../components/nivo/NivoHeatMapComponent";
import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import ColorSchemeSelectorHeatmap from "../components/selects/ColorSchemeSelectorHeatmap";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";

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