import {GraphContainer, OptionComponent} from "../../components/LayoutContainers";
import CheckboxPerson from "../../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../../components/checkboxes/CheckboxSellType";
import React from "react";
import ApexPieChart from "../../components/apex/ApexPieChart";
import ApexAreaChart from "../../components/apex/ApexAreaChart";
import ApexHeatmapChart from "../../components/apex/ApexHeatmapChart";
import ApexRadarChart from "../../components/apex/ApexRadarChart";
import ApexLineChart from "../../components/apex/ApexLineChart";
import ApexBarChart from "../../components/apex/ApexBarChart";
import {ConnectedGroupModeSelect as GroupModeSelect, ConnectedLayoutSelect as LayoutSelect} from "../../components/selects/LayoutSelect";
import ApexRadialChart from "../../components/apex/ApexRadialChart";

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

export const ApexRadarContainer = () => {
	return (
		<GraphContainer>
			<ApexRadarChart/>
			<OptionComponent>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};

export const ApexLineContainer = () => {
	return (
		<GraphContainer>
			<ApexLineChart/>
			<OptionComponent>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};

export const ApexBarContainer = () => {
	return (
		<GraphContainer>
			<ApexBarChart/>
			<OptionComponent>
				<GroupModeSelect/>
				<LayoutSelect/>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};

export const ApexRadialContainer = () => {
	return (
		<GraphContainer>
			<ApexRadialChart/>
			<OptionComponent>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	)
};