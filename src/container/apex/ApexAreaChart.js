import CheckboxPerson from "../../components/controlls/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/controlls/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/controlls/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/controlls/checkboxes/CheckboxSellType";
import React from "react";
import ApexAreaChart from "../../components/apex/ApexAreaChart";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
	<CheckboxPerson/>,
	<CheckboxValidity/>,
	<CheckboxMonths/>,
	<CheckboxSellType/>
]

export default () => <GraphComponent graph={<ApexAreaChart/>} configs={configurations}/>;