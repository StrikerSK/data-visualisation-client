import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import NivoBarComponent from "../../components/nivo/NivoBarComponent";
import {ColorSchemeSelector} from "../../components/selects/ColorSchemeSelector";
import {
    ConnectedGroupModeSelect as GroupModeSelect,
    ConnectedLayoutSelect as LayoutSelect
} from "../../components/selects/LayoutSelect";
import CheckboxPerson from "../../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import BarGeneratorButton from "../../components/BarGeneratorButton";

const configurations = [
    <ColorSchemeSelector/>,
    <GroupModeSelect/>,
    <LayoutSelect/>,
    <CheckboxPerson/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>,
    <BarGeneratorButton/>
]

export default () => <GraphComponent graph={<NivoBarComponent/>} configs={configurations}/>;
