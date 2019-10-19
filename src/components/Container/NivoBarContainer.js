import React from 'react';
import BarComponent from "../nivo/BarComponent";
import '../../css/GraphContainer.scss'
import {divStyle} from "../../lib/ComponentStyles";

const NivoBarContainer = () => {

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID za rok 2017</h1>
			<div style={divStyle} className={"graph-component"}>
				<BarComponent/>
			</div>
		</div>
	)
};

export default NivoBarContainer;