import React, {useState} from 'react';
import '../../css/GraphContainer.scss'
import NivoHeatMapComponent from "../nivo/NivoHeatMapComponent";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/checkboxes/CheckboxValidity";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/checkboxes/CheckboxSellType";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";

const NivoHeatMapContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	return (
		<GraphContainer>
			<NivoHeatMapComponent color={colorPattern} parametersList={[validityRequest, sellTypeRequest]}/>
			<OptionComponent>
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
			</OptionComponent>
		</GraphContainer>
	)
};

export default NivoHeatMapContainer;