import React from "react";
import ApexRadialChart from "../../components/apex/ApexRadialChart";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<ApexRadialChart/>} configs={DefaultConfiguration}/>;