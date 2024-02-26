import PieChartYearly from "../../components/recharts/PieChartYearly";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<PieChartYearly/>} configs={DefaultConfiguration}/>;