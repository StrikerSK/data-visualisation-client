import React from "react";

import NivoBubbleComponent from "../../components/nivo/NivoBubbleComponent";
import ColorSchemeSelector from "../../components/selects/ColorSchemeSelector";
import CheckboxPerson from "../../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
	<ColorSchemeSelector/>,
	<CheckboxPerson/>,
	<CheckboxValidity/>,
	<CheckboxMonths/>,
	<CheckboxSellType/>
]

export default () => <GraphComponent graph={<NivoBubbleComponent/>} configs={configurations}/>;