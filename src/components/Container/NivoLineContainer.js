import React, {useState} from 'react';
import LineComponent from "../nivo/LineComponent";
import {divStyle} from "../../lib/ComponentStyles";
import '../../css/GraphContainer.scss'
import CheckboxPerson from "../../lib/CheckboxPerson";
import CheckboxValidity from "../../lib/CheckboxValidity";

const NivoLineContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [personRequest, setPersonRequest] = useState("person=Dospelý&person=Dôchodcovia&person=Študenti&person=Prenosná&person=Juniori");
	const [validityRequest, setValidityRequest] = useState("validity=Mesačná&validity=3%20Mesačná&validity=5%20Mesačná&validity=Ročná");

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID za rok 2017</h1>
			<div style={divStyle} className={"graph-component"}>
				<LineComponent color={colorPattern} personParams={personRequest} validityParams={validityRequest}/>
			</div>
			<div>
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
			</div>
		</div>
	)
};
export default NivoLineContainer;