import React from "react";

import AreaChartComponent from "../../components/recharts/AreaChartComponent";
import CheckboxPerson from "../../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
	<CheckboxPerson/>,
	<CheckboxValidity/>,
	<CheckboxMonths/>,
	<CheckboxSellType/>
]

export default () => <GraphComponent graph={<AreaChartComponent/>} configs={configurations}/>;