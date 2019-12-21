import {GraphContainer, OptionComponent} from "../components/LayoutContainers";
import CheckboxPerson from "../components/checkboxes/CheckboxPerson";
import CheckboxValidity from "../components/checkboxes/CheckboxValidity";
import CheckboxMonths from "../components/checkboxes/CheckboxMonths";
import CheckboxSellType from "../components/checkboxes/CheckboxSellType";
import React from "react";
import ApexPieChart from "../components/apex/ApexPieChart";


const ApexChartContainers = () => {
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

export default ApexChartContainers;