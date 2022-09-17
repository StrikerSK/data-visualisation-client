import React from "react";

import {GraphContainer} from "../../components/LayoutContainers";
import NivoStreamComponent from "../../components/nivo/NivoStreamComponent";
import NivoRadarComponent from "../../components/nivo/NivoRadarComponent";
import NivoHeatMapComponent from "../../components/nivo/NivoHeatMapComponent";
import ColorSchemeSelectorHeatmap from "../../components/selects/ColorSchemeSelectorHeatmap";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import GraphComponent from "../../components/layout/GraphComponent";

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

const configurations = [
	<ColorSchemeSelectorHeatmap/>,
	<CheckboxValidity/>,
	<CheckboxMonths/>,
	<CheckboxSellType/>,
]

export const NivoHeatMapContainer = () => <GraphComponent graph={<NivoHeatMapComponent/>} configs={configurations}/>;
