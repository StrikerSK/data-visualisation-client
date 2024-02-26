import React from "react";
import ApexHeatmapChart from "../../components/apex/ApexHeatmapChart";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<ApexHeatmapChart/>} configs={DefaultConfiguration}/>;