import React from "react";

import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import AreaChartComponent from "../components/recharts/AreaChartComponent";
import LineGraphComponent from "../components/recharts/LineGraphComponent";
import BarChartComponent from "../components/recharts/BarChartComponent";
import StackedGraphComponent from "../components/recharts/StackedGraphComponent";

import CheckboxPerson from "../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";
import PieChartYearly from "../components/recharts/PieChartYearly";

export const RechartsAreaContainer = () => {
	return (
		<GraphContainer>
			<AreaChartComponent/>
		</GraphContainer>
	);
};

export const RechartsBarContainer = () => {
	return (
		<GraphContainer>
			<BarChartComponent/>
			<OptionComponent>
				<CheckboxPerson/>
				<CheckboxValidity/>
				<CheckboxMonths/>
				<CheckboxSellType/>
			</OptionComponent>
		</GraphContainer>
	);
};

export const RechartsLineContainer = () => {
	return (
		<GraphContainer>
			<LineGraphComponent/>
		</GraphContainer>
	);
};

export const RechartsStackedContainer = () => {
	return (
		<GraphContainer>
			<StackedGraphComponent/>
		</GraphContainer>
	);
};

export const RechartsPieContainer = () => {
	return (
		<GraphContainer>
			<PieChartYearly/>
		</GraphContainer>
	);
};