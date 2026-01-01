import CheckboxValidity from "../../components/controlls/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/controlls/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/controlls/checkboxes/CheckboxSellType";
import GraphComponent from "../../components/layout/GraphComponent";
import NivoHeatMapComponent from "../../components/nivo/NivoHeatMapComponent";
import React from "react";
import SelectColorScheme from "../../components/controlls/selects/SelectColorScheme";

const configurations = [
    <SelectColorScheme isHeatmap={true}/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>,
]

export default () => <GraphComponent graph={<NivoHeatMapComponent/>} configs={configurations}/>;