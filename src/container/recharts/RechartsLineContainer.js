import LineGraphComponent from "../../components/recharts/LineGraphComponent";
import CheckboxPerson from "../../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
    <CheckboxPerson/>,
    <CheckboxValidity/>,
    <CheckboxMonths/>,
    <CheckboxSellType/>
]

export default () => <GraphComponent graph={<LineGraphComponent/>} configs={configurations}/>;