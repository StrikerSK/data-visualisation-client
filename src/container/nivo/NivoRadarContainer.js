import React from "react";
import NivoRadarComponent from "../../components/nivo/NivoRadarComponent";
import ColorSchemeSelectorHeatmap from "../../components/selects/ColorSchemeSelectorHeatmap";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
    <ColorSchemeSelectorHeatmap/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>,
]

export default () => <GraphComponent graph={<NivoRadarComponent/>} configs={configurations}/>;
