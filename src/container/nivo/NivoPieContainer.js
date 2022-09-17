import React from "react";

import NivoPieComponent from "../../components/nivo/NivoPieComponent";
import ColorSchemeSelector from "../../components/selects/ColorSchemeSelector";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import CheckboxPerson from "../../components/checkboxes/CheckboxPerson";
import GraphComponent from "../../components/layout/GraphComponent";

const configurations = [
	<ColorSchemeSelector/>,
	<CheckboxPerson/>,
	<CheckboxValidity/>,
	<CheckboxMonths/>,
	<CheckboxSellType/>,
]

export default () => <GraphComponent graph={<NivoPieComponent/>} configs={configurations}/>;