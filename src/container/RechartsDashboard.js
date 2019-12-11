import React from "react";
import {DashboardBox, DashboardItem} from "../components/StyledComponents";
import {HeaderComponent} from "../components/LayoutContainers";
import BarChartComponent from "../components/recharts/BarChartComponent";
import LineGraphComponent from "../components/recharts/LineGraphComponent";
import StackedGraphComponent from "../components/recharts/StackedGraphComponent";
import AreaChartComponent from "../components/recharts/AreaChartComponent";

const RechartsDashboard = () => {
	return (
		<DashboardBox>
			<DashboardItem row={1} mrow={1} column={"2/4"}>
				<HeaderComponent/>
			</DashboardItem>
			<DashboardItem row={2} mrow={2} column={2}>
				<BarChartComponent/>
			</DashboardItem>
			<DashboardItem row={3} mrow={3} column={3}>
				<LineGraphComponent/>
			</DashboardItem>
			<DashboardItem row={2} mrow={4} column={3}>
				<StackedGraphComponent/>
			</DashboardItem>
			<DashboardItem row={3} mrow={5} column={2}>
				<AreaChartComponent/>
			</DashboardItem>
		</DashboardBox>
	);
};
export default RechartsDashboard;