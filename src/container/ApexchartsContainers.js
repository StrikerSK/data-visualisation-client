import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import CheckboxPerson from "../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";
import React from "react";
import ApexPieChart from "../components/apex/ApexPieChart";
import ApexAreaChart from "../components/apex/ApexAreaChart";
import ApexHeatmapChart from "../components/apex/ApexHeatmapChart";

export const ApexChartContainers = () => {
	return (
		<GraphContainer>
			<ApexPieChart/>
			<OptionComponent>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	);
};

export const ApexAreaContainer = () => {
	return (
		<GraphContainer>
			<ApexAreaChart/>
			<OptionComponent>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};

export const ApexHeatmapContainer = () => {
	return (
		<GraphContainer>
			<ApexHeatmapChart/>
			<OptionComponent>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};