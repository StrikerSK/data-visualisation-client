import React, {useState} from 'react';
import '../../css/GraphContainer.scss'
import {divStyle} from "../../lib/ComponentStyles";
import PieComponent from "../nivo/PieComponent";
import CheckboxValidity from "../../lib/CheckboxValidity";

const NivoPieContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [validityRequest, setValidityRequest] = useState("validity=Mesačná&validity=3%20Mesačná&validity=5%20Mesačná&validity=Ročná");

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID za rok 2017</h1>
			<div style={divStyle} className={"graph-component"}>
				<PieComponent color={colorPattern} validityParams={validityRequest}/>
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
					<CheckboxValidity dataSetter={setValidityRequest}/>
				</label>
			</div>
		</div>
	)
};

export default NivoPieContainer;