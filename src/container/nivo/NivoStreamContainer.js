import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import NivoStreamComponent from "../../components/nivo/NivoStreamComponent";
import CheckboxPerson from "../../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import {ColorSchemeSelector} from "../../components/selects/ColorSchemeSelector";

const configurations = [
    <ColorSchemeSelector/>,
    <CheckboxPerson/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>,
]

export default () => <GraphComponent graph={<NivoStreamComponent/>} configs={configurations}/>;
