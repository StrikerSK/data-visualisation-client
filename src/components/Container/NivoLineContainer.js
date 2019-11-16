import React, {useState} from "react";
import NivoLineComponent from "../nivo/NivoLineComponent";
import "../../css/GraphContainer.scss"
import CheckboxPerson, {defaultPersonRequestParams} from "../../lib/checkboxes/CheckboxPerson";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";

const NivoLineContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [personRequest, setPersonRequest] = useState(defaultPersonRequestParams);
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [monthRequest, setMonthRequest] = useState(defaultMonthRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	return (
		<GraphContainer>
			<NivoLineComponent color={colorPattern}
			                   parametersList={[validityRequest, monthRequest, sellTypeRequest, personRequest]}/>
			<OptionComponent>
				<ColorSchemeSelector/>
				<CheckboxPerson dataSetter={setPersonRequest}/>
				<CheckboxValidity dataSetter={setValidityRequest}/>
				<CheckboxMonths dataSetter={setMonthRequest}/>
				<CheckboxSellType dataSetter={setSellTypeRequest}/>
			</OptionComponent>
		</GraphContainer>
	)
};
export default NivoLineContainer;