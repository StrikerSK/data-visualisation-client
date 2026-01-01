import React from "react";

import NivoPieComponent from "../../components/nivo/NivoPieComponent";
import SelectColorScheme from "../../components/controlls/selects/SelectColorScheme";
import CheckboxValidity from "../../components/controlls/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/controlls/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/controlls/checkboxes/CheckboxSellType";
import CheckboxPerson from "../../components/controlls/checkboxes/CheckboxPerson";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
	<SelectColorScheme/>,
	<CheckboxPerson/>,
	<CheckboxValidity/>,
	<CheckboxMonths/>,
	<CheckboxSellType/>,
]

export default () => <GraphComponent graph={<NivoPieComponent/>} configs={configurations}/>;