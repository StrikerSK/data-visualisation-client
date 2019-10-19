import React from 'react';
import LineComponent from "../nivo/LineComponent";
import {divStyle} from "../../lib/ComponentStyles";
import '../../css/GraphContainer.scss'


const NivoLineContainer = () => {

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID za rok 2017</h1>
			<div style={divStyle} className={"graph-component"}>
				<LineComponent/>
			</div>
		</div>
	)
};

export default NivoLineContainer;