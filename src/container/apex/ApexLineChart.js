import React from "react";
import ApexLineChart from "../../components/apex/ApexLineChart";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<ApexLineChart/>} configs={DefaultConfiguration}/>;