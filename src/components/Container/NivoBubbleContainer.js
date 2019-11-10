import React, {useState} from 'react';
import '../../css/GraphContainer.scss'
import CheckboxPerson, {defaultPersonRequestParams} from "../../lib/CheckboxPerson";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/CheckboxSellType";
import ColorSchemeSelector from "../../lib/ColorSchemeSelector";
import NivoBubbleComponent from "../nivo/NivoBubbleComponent";

const NivoBubbleContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [personRequest, setPersonRequest] = useState(defaultPersonRequestParams);
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

		if(personRequest !== ""){
			paramsList.push(personRequest);
		}

		return paramsList;
	};

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID</h1>
			<NivoBubbleComponent color={colorPattern} parametersList={generateArr()}/>
			<div className={"options-component"}>
				<ColorSchemeSelector dataSetter={setColorPattern} currentValue={colorPattern}/>
				<CheckboxPerson dataSetter={setPersonRequest}/>
				<CheckboxValidity dataSetter={setValidityRequest}/>
				<CheckboxMonths dataSetter={setMonthRequest}/>
				<CheckboxSellType dataSetter={setSellTypeRequest}/>
			</div>
		</div>
	)
};

export default NivoBubbleContainer;