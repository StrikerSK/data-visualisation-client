import React, {useState} from 'react';
import '../../css/GraphContainer.scss'
import NivoPieComponent from "../nivo/NivoPieComponent";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/CheckboxSellType";
import ColorSchemeSelector from "../../lib/ColorSchemeSelector";

const NivoPieContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [monthRequest, setMonthRequest] = useState(defaultMonthRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	const generateArr = () => {
		const paramsList = [];

		if(validityRequest !== ""){
			paramsList.push(validityRequest);
		}

		if(monthRequest !== ""){
			paramsList.push(monthRequest);
		}

		if(sellTypeRequest !== ""){
			paramsList.push(sellTypeRequest);
		}

		return paramsList;
	};

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID</h1>
			<NivoPieComponent color={colorPattern} parametersList={generateArr()}/>
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