import GraphComponent from "../../components/layout/GraphComponent";
import React from "react";
import ApexPieChart from "../../components/apex/ApexPieChart";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<ApexPieChart/>} configs={DefaultConfiguration}/>;