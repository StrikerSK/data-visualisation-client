import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import NivoBarComponent from "../../components/nivo/NivoBarComponent";
import CheckboxPerson from "../../components/controlls/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/controlls/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/controlls/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/controlls/checkboxes/CheckboxSellType";
import SelectBarLayout from "../../components/controlls/selects/SelectBarLayout";
import SelectGroupLayout from "../../components/controlls/selects/SelectGroupLayout";
import SelectColorScheme from "../../components/controlls/selects/SelectColorScheme";

const configurations = [
    <SelectColorScheme/>,
    <SelectGroupLayout/>,
    <SelectBarLayout/>,
    <CheckboxPerson/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>
]

export default () => <GraphComponent graph={<NivoBarComponent/>} configs={configurations}/>;
