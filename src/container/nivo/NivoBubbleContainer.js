import React from "react";

import NivoBubbleComponent from "../../components/nivo/NivoBubbleComponent";
import SelectColorScheme from "../../components/controlls/selects/SelectColorScheme";
import CheckboxPerson from "../../components/controlls/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/controlls/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/controlls/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/controlls/checkboxes/CheckboxSellType";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
	<SelectColorScheme/>,
	<CheckboxPerson/>,
	<CheckboxValidity/>,
	<CheckboxMonths/>,
	<CheckboxSellType/>
]

export default () => <GraphComponent graph={<NivoBubbleComponent/>} configs={configurations}/>;