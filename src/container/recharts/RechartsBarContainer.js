import BarChartComponent from "../../components/recharts/BarChartComponent";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<BarChartComponent/>} configs={DefaultConfiguration}/>;
