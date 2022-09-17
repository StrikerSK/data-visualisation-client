import React from "react";

import DashboardTemplate from "../../components/DashboardTemplate";
import BarChartComponent from "../../components/recharts/BarChartComponent";
import LineGraphComponent from "../../components/recharts/LineGraphComponent";
import StackedGraphComponent from "../../components/recharts/StackedGraphComponent";
import AreaChartComponent from "../../components/recharts/AreaChartComponent";
import PieChartYearly from "../../components/recharts/PieChartYearly";

const componentsArray = [
	<BarChartComponent/>,
	<LineGraphComponent/>,
	<StackedGraphComponent/>,
	<AreaChartComponent/>,
	<PieChartYearly/>
];

export const RechartsDashboard = () => {
	return (
		<DashboardTemplate>
			{componentsArray}
		</DashboardTemplate>
	);
};

export const RechartsDashboardRandom = () => {
	return (
		<DashboardTemplate>
			{componentsArray.sort(() => Math.random() - 0.5)}
		</DashboardTemplate>
	);
};