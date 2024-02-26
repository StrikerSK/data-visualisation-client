import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ApexBarChart from "../../components/apex/ApexBarChart";
import ApexLineChart from "../../components/apex/ApexLineChart";
import ApexRadialChart from "../../components/apex/ApexRadialChart";
import ApexPieChart from "../../components/apex/ApexPieChart";
import ApexHeatmapChart from "../../components/apex/ApexHeatmapChart";
import ApexAreaChart from "../../components/apex/ApexAreaChart";
import ApexRadarChart from "../../components/apex/ApexRadarChart";

const componentArray = [
	<ApexBarChart/>,
	<ApexLineChart/>,
	<ApexRadialChart/>,
	<ApexPieChart/>,
	<ApexHeatmapChart/>,
	<ApexAreaChart/>,
	<ApexRadarChart/>
];

const shuffleArray = () => componentArray.sort(() => Math.random() - 0.5);

export const ApexDashboards = () => {
	return (
		<DashboardLayout>
			{componentArray}
		</DashboardLayout>
	);
};

export const ApexDashboardsRandom = () => {
	return (
		<DashboardLayout>
			{shuffleArray()}
		</DashboardLayout>
	);
};

export default {ApexDashboards, ApexDashboardsRandom};
