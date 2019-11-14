import React, {useState} from 'react';
import '../../css/GraphContainer.scss'
import NivoPieComponent from "../nivo/NivoPieComponent";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";

const NivoPieContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [monthRequest, setMonthRequest] = useState(defaultMonthRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);

	return (
		<GraphContainer>
			<NivoPieComponent color={colorPattern} parametersList={[validityRequest, monthRequest, sellTypeRequest]}/>
			<OptionComponent>
				<ColorSchemeSelector dataSetter={setColorPattern} currentValue={colorPattern}/>
				<CheckboxValidity dataSetter={setValidityRequest}/>
				<CheckboxMonths dataSetter={setMonthRequest}/>
				<CheckboxSellType dataSetter={setSellTypeRequest}/>
			</OptionComponent>
		</GraphContainer>
	)
};

export default NivoPieContainer;