import React from "react";

export const HeaderComponent = () => {
	return <h1 className={"graph-headline"}>Predajnosť lístkov PID</h1>
};

export const OptionComponent = ({children}) => {
	return (
		<div className={"options-component"}>
			{children}
		</div>
	);
};

export const GraphContainer = ({children}) => {
	return (
		<div className={"graph-container"}>
			<HeaderComponent/>
			{children}
		</div>
	);
};
export default {OptionComponent, GraphContainer}
