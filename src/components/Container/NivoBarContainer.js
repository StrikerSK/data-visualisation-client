import React, {useState} from 'react';
import BarComponent from "../nivo/BarComponent";
import '../../css/GraphContainer.scss'
import CheckboxPerson, {defaultPersonRequestParams} from "../../lib/CheckboxPerson";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/CheckboxSellType";
import ColorSchemeSelector from "../../lib/ColorSchemeSelector";
import GraphWrapper from "../../lib/GraphWrapper";

const NivoBarContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [personRequest, setPersonRequest] = useState(defaultPersonRequestParams);
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [monthRequest, setMonthRequest] = useState(defaultMonthRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID</h1>
			<GraphWrapper>
				<BarComponent color={colorPattern} personParams={personRequest} validityParams={validityRequest} monthParams={monthRequest} sellTypeParam={sellTypeRequest}/>
			</GraphWrapper>
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

export default NivoBarContainer;