import React from "react";

import AreaChartComponent from "../../components/recharts/AreaChartComponent";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "../AbstractCharts";

export default () => <GraphComponent graph={<AreaChartComponent/>} configs={DefaultConfiguration}/>;