import React, {useState} from "react";
import "../../css/GraphContainer.scss";
import CheckboxPerson, {defaultPersonRequestParams} from "../../lib/checkboxes/CheckboxPerson";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import NivoBubbleComponent from "../nivo/NivoBubbleComponent";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";

const NivoBubbleContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [personRequest, setPersonRequest] = useState(defaultPersonRequestParams);
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [monthRequest, setMonthRequest] = useState(defaultMonthRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	return (
		<GraphContainer>
			<NivoBubbleComponent color={colorPattern}
			                     parametersList={[validityRequest, monthRequest, sellTypeRequest, personRequest]}/>
			<OptionComponent>
				<ColorSchemeSelector dataSetter={setColorPattern} currentValue={colorPattern}/>
				<CheckboxPerson dataSetter={setPersonRequest}/>
				<CheckboxValidity dataSetter={setValidityRequest}/>
				<CheckboxMonths dataSetter={setMonthRequest}/>
				<CheckboxSellType dataSetter={setSellTypeRequest}/>
			</OptionComponent>
		</GraphContainer>
	)
};

export default NivoBubbleContainer;