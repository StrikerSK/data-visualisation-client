import ColorSchemeSelectorHeatmap from "../../components/selects/ColorSchemeSelectorHeatmap";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import GraphComponent from "../../components/layout/GraphComponent";
import NivoHeatMapComponent from "../../components/nivo/NivoHeatMapComponent";
import React from "react";

const configurations = [
    <ColorSchemeSelectorHeatmap/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>,
]

export default () => <GraphComponent graph={<NivoHeatMapComponent/>} configs={configurations}/>;