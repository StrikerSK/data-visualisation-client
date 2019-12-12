import React from "react";

import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import NivoWaffleComponent from "../components/nivo/NivoWaffleComponent";
import NivoStreamComponent from "../components/nivo/NivoStreamComponent";
import NivoRadarComponent from "../components/nivo/NivoRadarComponent";
import NivoHeatMapComponent from "../components/nivo/NivoHeatMapComponent";
import ColorSchemeSelectorHeatmap from "../components/selects/ColorSchemeSelectorHeatmap";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";

export const NivoWaffleContainer = () => {
	return (
		<GraphContainer>
			<NivoWaffleComponent/>
		</GraphContainer>
	);
};

export const NivoStreamContainer = () => {
	return (
		<GraphContainer>
			<NivoStreamComponent/>
		</GraphContainer>
	);
};

export const NivoRadarContainer = () => {
	return (
		<GraphContainer>
			<NivoRadarComponent/>
		</GraphContainer>
	);
};

export const NivoHeatMapContainer = () => {
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