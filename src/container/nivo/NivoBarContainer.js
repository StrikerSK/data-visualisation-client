import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import NivoBarComponent from "../../components/nivo/NivoBarComponent";
import SelectBarLayout from "../../components/controlls/selects/SelectBarLayout";
import SelectGroupLayout from "../../components/controlls/selects/SelectGroupLayout";
import {DefaultNivoConfiguration} from "./AbstractNivo";

const ComponentConfigurations = [
    ...DefaultNivoConfiguration,
    <SelectGroupLayout/>,
    <SelectBarLayout/>,
]

export default () => <GraphComponent graph={<NivoBarComponent/>} configs={ComponentConfigurations}/>;
