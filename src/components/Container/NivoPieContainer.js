import React from 'react';
import '../../css/GraphContainer.scss'
import {divStyle} from "../../lib/ComponentStyles";
import PieComponent from "../nivo/PieComponent";

const NivoPieContainer = () => {

	return (
		<div className={"graph-container"}>
			<h1 className={"graph-headline"}>Predajnosť lístkov PID za rok 2017</h1>
			<div style={divStyle} className={"graph-component"}>
				<PieComponent color={colorPattern}/>
			</div>
		</div>
	)
};

export default NivoPieContainer;