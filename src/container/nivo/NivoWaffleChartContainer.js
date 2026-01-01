import NivoWaffleComponent from "../../components/nivo/NivoWaffleComponent";
import CheckboxPerson from "../../components/controlls/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/controlls/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/controlls/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/controlls/checkboxes/CheckboxSellType";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import SelectColorScheme from "../../components/controlls/selects/SelectColorScheme";

const configurations = [
    <SelectColorScheme/>,
    <CheckboxPerson/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>,
]

export default () => <GraphComponent graph={<NivoWaffleComponent/>} configs={configurations}/>;