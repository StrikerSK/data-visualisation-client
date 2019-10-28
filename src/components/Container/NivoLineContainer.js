import React, {useState} from 'react';
import LineComponent from "../nivo/LineComponent";
import {divStyle} from "../../lib/ComponentStyles";
import '../../css/GraphContainer.scss'
import CheckboxPerson, {defaultPersonRequestParams} from "../../lib/CheckboxPerson";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/CheckboxSellType";

const NivoLineContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [personRequest, setPersonRequest] = useState(defaultPersonRequestParams);
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [monthRequest, setMonthRequest] = useState(defaultMonthRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID za rok 2017</h1>
			<div style={divStyle} className={"graph-component"}>
				<LineComponent color={colorPattern} personParams={personRequest} validityParams={validityRequest} monthParams={monthRequest} sellTypeParam={sellTypeRequest}/>
			</div>
			<div className={"options-component"}>
				<label>
					Pick your color scheme:
					<select onChange={e => setColorPattern(e.target.value)}>
						<option value={"nivo"}>Nivo</option>
						<option value={"set1"}>Set 1</option>
						<option value={"set2"}>Set 2</option>
						<option value={"set3"}>Set 3</option>
						<option value={"paired"}>Paired</option>
					</select>
				</label>
				<CheckboxPerson dataSetter={setPersonRequest}/>
				<CheckboxValidity dataSetter={setValidityRequest}/>
				<CheckboxMonths dataSetter={setMonthRequest}/>
				<CheckboxSellType dataSetter={setSellTypeRequest}/>
			</div>
		</div>
	)
};
export default NivoLineContainer;