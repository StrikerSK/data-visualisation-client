import React from "react";
import ApexBarChart from "../../components/apex/ApexBarChart";
import GraphComponent from "../../components/layout/GraphComponent";
import SelectGroupLayout from "../../components/controlls/selects/SelectGroupLayout";
import SelectBarLayout from "../../components/controlls/selects/SelectBarLayout";
import {DefaultConfiguration} from "../AbstractCharts";

const BarConfigurations = [
    ...DefaultConfiguration,
    <SelectGroupLayout/>,
    <SelectBarLayout/>
]

export default () => <GraphComponent graph={<ApexBarChart/>} configs={BarConfigurations}/>;