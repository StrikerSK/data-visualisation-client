import React, {useState} from 'react';
import '../../css/GraphContainer.scss'
import {divStyle} from "../../lib/ComponentStyles";
import PieComponent from "../nivo/PieComponent";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/CheckboxSellType";
import ColorSchemeSelector from "../../lib/ColorSchemeSelector";

const NivoPieContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [monthRequest, setMonthRequest] = useState(defaultMonthRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID</h1>
			<div style={divStyle} className={"graph-component"}>
				<PieComponent color={colorPattern} validityParams={validityRequest} monthParams={monthRequest} sellTypes={sellTypeRequest}/>
			</div>
			<div className={"options-component"}>
				<ColorSchemeSelector dataSetter={setColorPattern} currentValue={colorPattern}/>
				<CheckboxValidity dataSetter={setValidityRequest}/>
				<CheckboxMonths dataSetter={setMonthRequest}/>
				<CheckboxSellType dataSetter={setSellTypeRequest}/>
			</div>
		</div>
	)
};

export default NivoPieContainer;