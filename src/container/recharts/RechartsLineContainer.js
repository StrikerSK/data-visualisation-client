import LineGraphComponent from "../../components/recharts/LineGraphComponent";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<LineGraphComponent/>} configs={DefaultConfiguration}/>;