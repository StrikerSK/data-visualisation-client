import StackedGraphComponent from "../../components/recharts/StackedGraphComponent";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<StackedGraphComponent/>} configs={DefaultConfiguration}/>;