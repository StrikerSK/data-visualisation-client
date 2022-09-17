import ApexBarChart from "../../components/apex/ApexBarChart";
import {
    ConnectedGroupModeSelect as GroupModeSelect,
    ConnectedLayoutSelect as LayoutSelect
} from "../../components/selects/LayoutSelect";
import CheckboxPerson from "../../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
    <GroupModeSelect/>,
    <LayoutSelect/>,
    <CheckboxPerson/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>
]

export default () => <GraphComponent graph={<ApexBarChart/>} configs={configurations}/>;