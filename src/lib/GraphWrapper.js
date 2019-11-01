import React from 'react';
import {graph_box} from "./ComponentStyles";

export const GraphWrapper = ({children}) => {
	return (
		<div style={graph_box} className={"graph-component"}>
			{children}
		</div>
	)
};
export default GraphWrapper;