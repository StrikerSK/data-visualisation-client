import React from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
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
		<DashboardLayout>
			{componentsArray}
		</DashboardLayout>
	);
};

export const RechartsDashboardRandom = () => {
	return (
		<DashboardLayout>
			{componentsArray.sort(() => Math.random() - 0.5)}
		</DashboardLayout>
	);
};