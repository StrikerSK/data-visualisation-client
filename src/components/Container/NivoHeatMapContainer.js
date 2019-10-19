import React from 'react';
import '../../css/GraphContainer.scss'
import {divStyle} from "../../lib/ComponentStyles";
import HeatMapComponent from "../nivo/HeatMapComponent";

const NivoHeatMapContainer = () => {

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID za rok 2017</h1>
			<div style={divStyle} className={"graph-component"}>
				<HeatMapComponent/>
			</div>
		</div>
	)
};

export default NivoHeatMapContainer;