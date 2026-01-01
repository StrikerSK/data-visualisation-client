import React from "react";
import ApexAreaChart from "../../components/apex/ApexAreaChart";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<ApexAreaChart/>} configs={DefaultConfiguration}/>;