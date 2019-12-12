import React from "react";

import DashboardTemplate from "../components/DashboardTemplate";
import BarChartComponent from "../components/recharts/BarChartComponent";
import LineGraphComponent from "../components/recharts/LineGraphComponent";
import StackedGraphComponent from "../components/recharts/StackedGraphComponent";
import AreaChartComponent from "../components/recharts/AreaChartComponent";

const RechartsDashboard = () => {
	return (
		<DashboardTemplate>
			<BarChartComponent/>
			<LineGraphComponent/>
			<StackedGraphComponent/>
			<AreaChartComponent/>
		</DashboardTemplate>
	);
};
export default RechartsDashboard;