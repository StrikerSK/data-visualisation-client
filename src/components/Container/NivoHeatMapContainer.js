import React, {useState} from "react";
import "../../css/GraphContainer.scss"
import NivoHeatMapComponent from "../nivo/NivoHeatMapComponent";
import CheckboxValidity from "../../lib/checkboxes/CheckboxValidity";
import CheckboxSellType from "../../lib/checkboxes/CheckboxSellType";
import {GraphContainer, OptionComponent} from "../../lib/LayoutContainers";

const NivoHeatMapContainer = () => {
	const [colorPattern, setColorPattern] = useState("nivo");

	return (
		<GraphContainer>
			<NivoHeatMapComponent color={colorPattern}/>
			<OptionComponent>
				<label>
					Pick your color scheme:
					<select onChange={(e) => setColorPattern(e.target.value)}>
						<option value={"nivo"}>Nivo</option>
						<option value={"BrBG"}>BrBG</option>
						<option value={"PRGn"}>PRGn</option>
						<option value={"PuOr"}>PuOr</option>
						<option value={"PuOr"}>PuOr</option>
					</select>
				</label>
				<CheckboxValidity/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};

export default NivoHeatMapContainer;