import React from "react";
import ApexRadarChart from "../../components/apex/ApexRadarChart";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<ApexRadarChart/>} configs={DefaultConfiguration}/>;