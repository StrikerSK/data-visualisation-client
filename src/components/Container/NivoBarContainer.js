import React, {useState} from 'react';
import NivoBarComponent from "../nivo/NivoBarComponent";
import '../../css/GraphContainer.scss'
import CheckboxPerson, {defaultPersonRequestParams} from "../../lib/checkboxes/CheckboxPerson";
import CheckboxValidity, {defaultValidityRequestParams} from "../../lib/checkboxes/CheckboxValidity";
import CheckboxMonths, {defaultMonthRequestParams} from "../../lib/checkboxes/CheckboxMonths";
import CheckboxSellType, {defaultSellTypeRequestParams} from "../../lib/checkboxes/CheckboxSellType";
import ColorSchemeSelector from "../../lib/selects/ColorSchemeSelector";
import {GroupModeSelect, LayoutSelect} from "../../lib/selects/LayoutSelect";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";
import BarGeneratorButton, {defaultBarOrder} from "../../lib/BarGeneratorButton";

const NivoBarContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");
	const [personRequest, setPersonRequest] = useState(defaultPersonRequestParams);
	const [validityRequest, setValidityRequest] = useState(defaultValidityRequestParams);
	const [monthRequest, setMonthRequest] = useState(defaultMonthRequestParams);
	const [sellTypeRequest, setSellTypeRequest] = useState(defaultSellTypeRequestParams);
	const [layout, setLayout] = useState("vertical");
	const [grouping, setGrouping] = useState("stacked");
	const [barOrdering, setBarOrdering] = useState(defaultBarOrder);

	return (
		<GraphContainer>
			<NivoBarComponent color={colorPattern}
			                  parametersList={[personRequest, validityRequest, monthRequest, sellTypeRequest]}
			                  barLayout={layout}
			                  barGrouping={grouping} barOrder={barOrdering}/>
			<OptionComponent>
				<ColorSchemeSelector dataSetter={setColorPattern} currentValue={colorPattern}/>
				<GroupModeSelect current={grouping} dataSetter={setGrouping}/>
				<LayoutSelect current={layout} dataSetter={setLayout}/>
				<CheckboxPerson dataSetter={setPersonRequest}/>
				<CheckboxValidity dataSetter={setValidityRequest}/>
				<CheckboxMonths dataSetter={setMonthRequest}/>
				<CheckboxSellType dataSetter={setSellTypeRequest}/>
				<BarGeneratorButton dataSetter={setBarOrdering}/>
			</OptionComponent>
		</GraphContainer>
	)
};
export default NivoBarContainer;
