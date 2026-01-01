import ApexBarChart from "../../components/apex/ApexBarChart";
import CheckboxPerson from "../../components/controlls/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/controlls/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/controlls/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/controlls/checkboxes/CheckboxSellType";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import SelectGroupLayout from "../../components/controlls/selects/SelectGroupLayout";
import SelectBarLayout from "../../components/controlls/selects/SelectBarLayout";

const configurations = [
    <SelectGroupLayout/>,
    <SelectBarLayout/>,
    <CheckboxPerson/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>
]

export default () => <GraphComponent graph={<ApexBarChart/>} configs={configurations}/>;