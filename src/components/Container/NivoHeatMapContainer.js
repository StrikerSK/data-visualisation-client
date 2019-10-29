import React, {useState} from 'react';
import '../../css/GraphContainer.scss'
import {divStyle} from "../../lib/ComponentStyles";
import HeatMapComponent from "../nivo/HeatMapComponent";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/CheckboxValidity";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/CheckboxSellType";

const NivoHeatMapContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID za rok 2017</h1>
			<div style={divStyle} className={"graph-component"}>
				<HeatMapComponent color={colorPattern} sellTypeParam={sellTypeRequest} validityParams={validityRequest}/>
			</div>
			<div className={"options-component"}>
				<label>
					Pick your color scheme:
					<select onChange={e => setColorPattern(e.target.value)}>
						<option value={"nivo"}>Nivo</option>
						<option value={"BrBG"}>BrBG</option>
						<option value={"PRGn"}>PRGn</option>
						<option value={"PuOr"}>PuOr</option>
						<option value={"PuOr"}>PuOr</option>
					</select>
				</label>
				<CheckboxValidity dataSetter={setValidityRequest}/>
				<CheckboxSellType dataSetter={setSellTypeRequest}/>
			</div>
		</div>
	)
};

export default NivoHeatMapContainer;