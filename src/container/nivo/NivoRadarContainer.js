import React from "react";
import NivoRadarComponent from "../../components/nivo/NivoRadarComponent";
import CheckboxValidity from "../../components/controlls/checkboxes/CheckboxValidity";
import CheckboxSellType from "../../components/controlls/checkboxes/CheckboxSellType";
import CheckboxMonths from "../../components/controlls/checkboxes/CheckboxMonths";
import GraphComponent from "../../components/layout/GraphComponent";
import SelectColorScheme from "../../components/controlls/selects/SelectColorScheme";

const configurations = [
    <SelectColorScheme isHeatmap={true}/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>,
]

export default () => <GraphComponent graph={<NivoRadarComponent/>} configs={configurations}/>;
